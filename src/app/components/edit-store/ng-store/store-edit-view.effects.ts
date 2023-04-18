import { Injectable } from "@angular/core";
import { Actions, ofType, Effect } from '@ngrx/effects';
import { switchMap, catchError, map, tap } from 'rxjs/operators';
import * as StoreEditActions from './store-edit-view.actions';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { of } from 'rxjs';
import { TestMockHttpParams } from '../../../core/testing_utils/http_utils/http_mock';

@Injectable()
export class StoreEditEffects {

    constructor(
        private actions$: Actions, 
        private http: HttpClient,
        private router: Router,
    ) {}

    @Effect({ dispatch: true })
    storeEdit = this.actions$.pipe(
        ofType(StoreEditActions.SEND_STORE_EDIT),
        switchMap((action: StoreEditActions.SendStoreEdit) => {
            
            return this.http.put(
                action.payload.requestUrl, 
                action.payload.requestData,
                {params: new TestMockHttpParams(action.payload.testMockedHttpResponse)}
                ).pipe(
                map(resData => {
                    return new StoreEditActions.SendStoreEditSuccess();
                 }),
                catchError(errorRes => {
                    return of(new StoreEditActions.SendStoreEditFail(errorRes));
                })
            );
        })
    );

  @Effect({ dispatch: false })
  storeEditRedirect = this.actions$.pipe(
    ofType(StoreEditActions.SEND_STORE_EDIT_SUCCESS),
    tap(() => {

        if (this.router.url.includes("income")){
            this.router.navigate(['/stores/income-statements']);
        }else{
            this.router.navigate(['/stores']);
        }
    })
  );
}
