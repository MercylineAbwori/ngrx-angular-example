import { Action } from '@ngrx/store';
import { TestMockHttpResponseInterface } from 'src/app/core/testing_utils/http_utils/http_mock';
import { StoreViewModel } from 'src/app/models/store-view.model';

export const GET_STORE = '[Top] Get Store';
export const GET_STORE_SUCCESS = '[Top] Get Store Success';
export const GET_STORE_FAIL = '[Top] Get Store Failure';
export const GET_STORE_DELETE = '[Top] Get Store Delete';
export const GET_STORE_DELEETE_SUCCESS = '[Top] Get Store Delete Success';
export const GET_STORE_DELETE_FAIL = '[Top] Get Store Delete Failure';

export class GetStore implements Action {
    readonly type = GET_STORE;

    constructor(public payload: {
        requestUrl: string,
        testMockedHttpResponse: TestMockHttpResponseInterface 
    }) {}
}

export class GetStoreSuccess implements Action {
    readonly type = GET_STORE_SUCCESS;

    constructor(public payload: StoreViewModel) {}
}

export class GetStoreFail implements Action {
    readonly type = GET_STORE_FAIL;

    constructor(public payload: string) {}
}

export class GetStoreDelete implements Action {
    readonly type = GET_STORE_DELETE;

    constructor(public payload: {storeRegNo: string}) {}
}

export class GetStoreDeleteSuccess implements Action {
    readonly type = GET_STORE_DELEETE_SUCCESS;
}

export class GetStoreDeleteFail implements Action {
    readonly type = GET_STORE_DELETE_FAIL;

    constructor(public payload: string) {}
}

export type StoreViewActions = 
    | GetStore
    | GetStoreSuccess
    | GetStoreFail
    | GetStoreDelete
    | GetStoreDeleteSuccess
    | GetStoreDeleteFail;