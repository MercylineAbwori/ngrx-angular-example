import { LeanStoreIndexViewModel } from '../lean-store-index-view.model';
import { Action } from '@ngrx/store';
import { TestMockHttpResponseInterface } from '../../../core/testing_utils/http_utils/http_mock';

export const GET_LEAN_STORE_INDEX = '[LeanStore Index] Get LeanStore Index';
export const GET_LEAN_STORE_INDEX_SUCCESS = '[LeanStore Index] Get LeanStore Index Success';
export const GET_LEAN_STORE_INDEX_FAIL = '[LeanStore Index] Get LeanStore Index Failure';
export const GET_LEAN_STORE_INDEX_NEXT_PAGE = '[LeanStore Index] Get LeanStore Index Next Page';
export const GET_LEAN_STORE_INDEX_NEXT_PAGE_SUCCESS = '[LeanStore Index] Get LeanStore Index Next Page Success';

export class GetLeanStoreIndex implements Action {
    readonly type = GET_LEAN_STORE_INDEX;

    constructor(public payload: {
        requestUrl: string,
        testMockedHttpResponse: TestMockHttpResponseInterface
    }) {}
}

export class GetLeanStoreIndexSuccess implements Action {
    readonly type = GET_LEAN_STORE_INDEX_SUCCESS;

    constructor(public payload: LeanStoreIndexViewModel) {}
}

export class GetLeanStoreIndexFail implements Action {
    readonly type = GET_LEAN_STORE_INDEX_FAIL;

    constructor(public payload: string) {}
}


export class GetLeanStoreIndexNextPage implements Action {
    readonly type = GET_LEAN_STORE_INDEX_NEXT_PAGE;

    constructor(public payload: {nextPageUrl: string}) {}
}

export class GetLeanStoreIndexNextPageSuccess implements Action {
    readonly type = GET_LEAN_STORE_INDEX_NEXT_PAGE_SUCCESS;

    constructor(public payload: LeanStoreIndexViewModel) {}
}

export type LeanStoreIndexViewActions = 
    | GetLeanStoreIndex
    | GetLeanStoreIndexSuccess
    | GetLeanStoreIndexFail
    | GetLeanStoreIndexNextPage
    | GetLeanStoreIndexNextPageSuccess;