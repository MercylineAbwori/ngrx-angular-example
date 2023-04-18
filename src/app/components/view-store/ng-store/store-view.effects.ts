import { AppUrls } from '../../../core/api_urls/api_urls';
import { StoreViewResponseDataInterface } from './store-view.interfaces';
import { Injectable } from "@angular/core";
import { Actions, ofType, Effect, act } from '@ngrx/effects';
import { switchMap, catchError, map, tap } from 'rxjs/operators';
import * as StoreViewActions from './store-view.actions';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { of } from 'rxjs';
import { StoreViewModel } from '../store-view.model';
import { TestMockHttpParams } from '../../../core/testing_utils/http_utils/http_mock';

@Injectable()
export class StoreViewEffects {

    constructor(
        private actions$: Actions,
        private http: HttpClient,
        private router: Router,
    ) { }

    @Effect()
    getStore = this.actions$.pipe(ofType(StoreViewActions.GET_STORE),
        switchMap((action: StoreViewActions.GetStore) => {

            return this.http.get<StoreViewResponseDataInterface>(
                action.payload.requestUrl,
                { params: new TestMockHttpParams(action.payload.testMockedHttpResponse) })
                .pipe(
                    map(resData => {

                        const storeView = new StoreViewModel(
                            resData.name,
                            resData.enabled,
                            resData.min_sale_value,
                            resData.reg_no,
                            resData.days_to_go_back,
                            resData.shop_rent,
                        )

                        return new StoreViewActions.GetStoreSuccess(storeView);
                    }),
                    catchError(errorRes => {
                        return of(new StoreViewActions.GetStoreFail(errorRes));
                    })
                );
        })
    );

    @Effect()
    getStoreDelete = this.actions$.pipe(ofType(StoreViewActions.GET_STORE_DELETE),
        switchMap((action: StoreViewActions.GetStoreDelete) => {

            const storeRegNo: string = action.payload.storeRegNo;
            const requestUrl: string = AppUrls.storeViewUrl(storeRegNo);

            return this.http.delete(requestUrl)
                .pipe(
                    map(resData => {
                        return new StoreViewActions.GetStoreDeleteSuccess();
                    }),
                    catchError(errorRes => {
                        return of(new StoreViewActions.GetStoreFail(errorRes));
                    })
                );
        })
    );

    @Effect({ dispatch: false })
    getStoreDeleteSuccess = this.actions$.pipe(
        ofType(StoreViewActions.GET_STORE_DELEETE_SUCCESS),
        tap(() => {
            this.router.navigate(['/stores']);
        })
    );
}
