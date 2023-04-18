import { StoreResponseDataInterface, StoreSendItemListResponseDataInterface } from './store-index-view.interfaces';
import { Injectable } from "@angular/core";
import { Actions, ofType, Effect } from '@ngrx/effects';
import { switchMap, catchError, map, tap } from 'rxjs/operators';

import * as StoreIndexViewActions from './store-index-view.actions';
import { HttpClient } from "@angular/common/http";
import { of } from 'rxjs';
import { StoreIndexViewModel } from '../store-index-view.model';
import { TestMockHttpParams } from '../../../core/testing_utils/http_utils/http_mock';
import { Router } from "@angular/router";

@Injectable()
export class StoreIndexViewEffects {

    constructor(
        private actions$: Actions, 
        private http: HttpClient,
        private router: Router,
    ) {}

    @Effect({ dispatch: true })
    storeSendItemList = this.actions$.pipe(
        ofType(StoreIndexViewActions.SEND_STORE_ITEM_LIST),
        switchMap((action: StoreIndexViewActions.SendStoreItemList) => {
            
            return this.http.post<StoreSendItemListResponseDataInterface>(
                action.payload.requestUrl, 
                action.payload.requestData,
                {params: new TestMockHttpParams(action.payload.testMockedHttpResponse)}
                ).pipe(
                map(resData => {

                    return new StoreIndexViewActions.SendStoreItemListResult(
                        {
                            success: resData.success,
                            message: resData.message
                        }
                    );
                 }),
                catchError(errorRes => {
                    return of(new StoreIndexViewActions.SendStoreItemListFail(errorRes));
                })
            );
        })
    );

    @Effect()
    getStoreIndexx = this.actions$.pipe(ofType(StoreIndexViewActions.GET_STORE_INDEX),
        switchMap((action: StoreIndexViewActions.GetStoreIndex) => {

            return this.http.get<StoreResponseDataInterface>(
                action.payload.requestUrl,
                {params: new TestMockHttpParams(action.payload.testMockedHttpResponse)}
                )
            .pipe(
                map(resData => {

                    const storeIndexView = new StoreIndexViewModel(
                        resData.count,
                        resData.next,
                        resData.results
                    )

                    return new StoreIndexViewActions.GetStoreIndexSuccess(
                        storeIndexView);

                }),
                catchError(errorRes => {
                    return of(new StoreIndexViewActions.GetStoreIndexFail(errorRes));
                })
            );
        })
    );

    // @Effect({ dispatch: false })
    // storeSendItemListRedirect = this.actions$.pipe(
    //     ofType(StoreIndexViewActions.SEND_STORE_ITEM_LIST_RESULT),
    //     tap(() => {
    //     this.router.navigate(['/stores']);
    //     })
    // );

    @Effect()
    getStoreIndex = this.actions$.pipe(ofType(StoreIndexViewActions.GET_STORE_INDEX),
        switchMap((action: StoreIndexViewActions.GetStoreIndex) => {

            return this.http.get<StoreResponseDataInterface>(
                action.payload.requestUrl,
                {params: new TestMockHttpParams(action.payload.testMockedHttpResponse)}
                )
            .pipe(
                map(resData => {

                    const storeIndexView = new StoreIndexViewModel(
                        resData.count,
                        resData.next,
                        resData.results
                    )

                    return new StoreIndexViewActions.GetStoreIndexSuccess(
                        storeIndexView);

                }),
                catchError(errorRes => {
                    return of(new StoreIndexViewActions.GetStoreIndexFail(errorRes));
                })
            );
        })
    );


    @Effect()
    getStoreIndexNext = this.actions$.pipe(ofType(StoreIndexViewActions.GET_STORE_INDEX_NEXT_PAGE),
        switchMap((action: StoreIndexViewActions.GetStoreIndexNextPage) => {

            var requestUrl: string = action.payload.nextPageUrl;
        
            return this.http.get<StoreResponseDataInterface>(requestUrl)
            .pipe(
                map(resData => {

                    const storeIndexView = new StoreIndexViewModel(
                        resData.count,
                        resData.next,
                        resData.results
                    )

                    return new StoreIndexViewActions.GetStoreIndexNextPageSuccess(
                        storeIndexView);

                }),
                catchError(errorRes => {
                    return of(new StoreIndexViewActions.GetStoreIndexFail(errorRes));
                })
            );
        })
    );
}
