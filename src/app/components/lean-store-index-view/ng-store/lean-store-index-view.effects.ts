import { LeanStoreResponseDataInterface } from './lean-store-index-view.interfaces';
import { Injectable } from "@angular/core";
import { Actions, ofType, Effect } from '@ngrx/effects';
import { switchMap, catchError, map } from 'rxjs/operators';
import * as LeanStoreIndexViewActions from './lean-store-index-view.actions';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { of } from 'rxjs';
import { LeanStoreIndexViewModel } from '../lean-store-index-view.model';
import { TestMockHttpParams } from '../../../core/testing_utils/http_utils/http_mock';

@Injectable()
export class LeanStoreIndexViewEffects {

    constructor(
        private actions$: Actions, 
        private http: HttpClient,
        private router: Router,
    ) {}

    @Effect()
    getLeanStoreIndex = this.actions$.pipe(ofType(LeanStoreIndexViewActions.GET_LEAN_STORE_INDEX),
        switchMap((action: LeanStoreIndexViewActions.GetLeanStoreIndex) => {

            return this.http.get<LeanStoreResponseDataInterface>(
                action.payload.requestUrl,
                {params: new TestMockHttpParams(action.payload.testMockedHttpResponse)}
                )
            .pipe(
                map(resData => {

                    const leanStoreIndexView = new LeanStoreIndexViewModel(
                        resData.count,
                        resData.next,
                        resData.results,
                        resData.clusters
                    )

                    return new LeanStoreIndexViewActions.GetLeanStoreIndexSuccess(
                        leanStoreIndexView);

                }),
                catchError(errorRes => {
                    return of(new LeanStoreIndexViewActions.GetLeanStoreIndexFail(errorRes));
                })
            );
        })
    );


    @Effect()
    getLeanStoreIndexNext = this.actions$.pipe(ofType(LeanStoreIndexViewActions.GET_LEAN_STORE_INDEX_NEXT_PAGE),
        switchMap((action: LeanStoreIndexViewActions.GetLeanStoreIndexNextPage) => {

            var requestUrl: string = action.payload.nextPageUrl;
        
            return this.http.get<LeanStoreResponseDataInterface>(requestUrl)
            .pipe(
                map(resData => {

                    const leanStoreIndexView = new LeanStoreIndexViewModel(
                        resData.count,
                        resData.next,
                        resData.results,
                        resData.clusters
                    )

                    return new LeanStoreIndexViewActions.GetLeanStoreIndexNextPageSuccess(
                        leanStoreIndexView);

                }),
                catchError(errorRes => {
                    return of(new LeanStoreIndexViewActions.GetLeanStoreIndexFail(errorRes));
                })
            );
        })
    );
}
