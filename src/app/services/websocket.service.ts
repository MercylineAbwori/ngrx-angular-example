import { HttpClient } from '@angular/common/http';
import { AppUrls } from '../core/api_urls/api_urls';
import { Injectable } from '@angular/core';
import { Observable, timer} from 'rxjs';
import { retryWhen, tap, delayWhen, take} from 'rxjs/operators';
import {webSocket} from 'rxjs/webSocket';
import * as AuthActions from '../accounts/store/auth/auth.actions';

import { Store } from '@ngrx/store';
import * as fromApp from '../ng-store/app.reducer';
import { User } from '../accounts/user.model';
import { AccessUserLocalStorage } from '../core/local-storage/local_storage_handlers';


export interface ProfileDataInterface {
  type: string, 
  profile_image_url: string, 
}


@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

    private socket$;

    private keepSocketRunning = true;

    constructor(
        private store: Store<fromApp.AppState>,
        private http: HttpClient) {  
    }

    open(){
        //this.keepSocketRunning = true;
        //this.authenticateAndConnect()
    }

    authenticateAndConnect(){
        
        if ((!this.socket$ || this.socket$.closed) && this.keepSocketRunning) {
            this.http.get<{token: string}>(AppUrls.webSocketTicketUrl()).subscribe(data => {
                this.connect(data.token);
            })
        }
    }

    /**
    * Creates a new WebSocket subject and send it to the messages subject
    */
    private connect(ticket: string){
        
        if (ticket){
            this.socket$ = this.getNewWebSocket(ticket);
            this.socket$.subscribe(dataFromServer => this.processReceivedDataFromServer(dataFromServer));
            this.reconnect(this.socket$)
        } 
    }

    /**
    * Retry a given observable by a time span
    * @param observable the observable to be retried
    */
    private reconnect(observable: Observable<any>): Observable<any> {
        return observable.pipe(
            retryWhen(
                errors => errors.pipe(tap(),
                delayWhen(_ => timer(10000)))));
    }

    close() {
        this.keepSocketRunning = false;
        
        if (this.socket$){
            this.socket$.complete();
            this.socket$ = undefined;
        }
    }

    sendMessage(msg: any) {
        this.socket$.next(msg);
    }

    /**
    * Return a custom WebSocket subject which reconnects after failure
    * Must be called after token availability has been confirmed
    */
    private getNewWebSocket(ticket: string) {
        return webSocket({
            url: `${AppUrls.webSocketUrl()}${ticket}`,
            openObserver: {
                next: () => {}
            },
            closeObserver: {
                next: () => {
                    this.socket$ = undefined;
                    this.authenticateAndConnect()
                }
            },
        });
    }


    /**
    * Called when data from the backend server is received by the websocket 
    * connection
    * @param dataFromServer - Data from the backend server
    */
    processReceivedDataFromServer(dataFromServer){

        if (dataFromServer['message']['type'] == 'profile_change'){
            this.profileDataInterfaceReceived(dataFromServer['message'])
        }
    }
    
    /**
     * Called when data from the backend server is received by the websocket 
     * connection and has been confirmed to be of type "profile_change".
     * Inserts the new profile data into the current user's store and local
     * storage
     * @param profileData - Profile data that should be inserteed into the
     * current logging user
     */
    profileDataInterfaceReceived(profileData: ProfileDataInterface){
        // Subscrible to the auth store
        // We pipe take(1) into the discription to prevent the subscription from
        // running forever since we only want to get the user. With take(1), it will only run once 
        this.store.select('auth').pipe(take(1)).subscribe(state => {

            var userData: User = state.user;

            const updatedUser = new User(
                userData.getName,
                userData.getToken,
                userData.getUserType,
                userData.getUserPerms

            );

            // Store new user locally
            AccessUserLocalStorage.storeUserData(updatedUser);

            // Send a user data update from websocket action
            this.store.dispatch(new AuthActions.UpdateUserDataFromWebsocket(updatedUser));
            
        });
    }
}