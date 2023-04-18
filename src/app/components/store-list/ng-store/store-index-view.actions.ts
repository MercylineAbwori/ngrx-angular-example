
import { Action } from '@ngrx/store';

import { StoreSendItemListResponseDataInterface } from './store-index-view.interfaces';
import { TestMockHttpResponseInterface } from 'src/app/core/testing_utils/http_utils/http_mock';
import { StoreIndexViewModel } from 'src/app/models/store-index-view.model';

export const SEND_STORE_ITEM_LIST = '[Store Index] Send Store Item List';
export const SEND_STORE_ITEM_LIST_RESULT = '[Store Index] Send Store Item List Result';
export const SEND_STORE_ITEM_LIST_FAIL = '[Store Index] Send Store Item List Fail';

export const GET_STORE_INDEX = '[Store Index] Get Store Index';
export const GET_STORE_INDEX_SUCCESS = '[Store Index] Get Store Index Success';
export const GET_STORE_INDEX_FAIL = '[Store Index] Get Store Index Failure';
export const GET_STORE_INDEX_NEXT_PAGE = '[Store Index] Get Store Index Next Page';
export const GET_STORE_INDEX_NEXT_PAGE_SUCCESS = '[Store Index] Get Store Index Next Page Success';

export interface SendStoreItemListRequestDataInterface {
    requestData: {},
    requestUrl: string,
    testMockedHttpResponse: TestMockHttpResponseInterface
}

export class SendStoreItemList implements Action {
    readonly type = SEND_STORE_ITEM_LIST;

    constructor(public payload: SendStoreItemListRequestDataInterface) {}
}

export class SendStoreItemListResult implements Action {
    readonly type = SEND_STORE_ITEM_LIST_RESULT;

    constructor(public payload: StoreSendItemListResponseDataInterface) {}
}

export class SendStoreItemListFail implements Action {
    readonly type = SEND_STORE_ITEM_LIST_FAIL;

    constructor(public payload: string) {}
}

export class GetStoreIndex implements Action {
    readonly type = GET_STORE_INDEX;

    constructor(public payload: {
        requestUrl: string,
        testMockedHttpResponse: TestMockHttpResponseInterface
    }) {}
}

export class GetStoreIndexSuccess implements Action {
    readonly type = GET_STORE_INDEX_SUCCESS;

    constructor(public payload: StoreIndexViewModel) {}
}

export class GetStoreIndexFail implements Action {
    readonly type = GET_STORE_INDEX_FAIL;

    constructor(public payload: string) {}
}

export class GetStoreIndexNextPage implements Action {
    readonly type = GET_STORE_INDEX_NEXT_PAGE;

    constructor(public payload: {nextPageUrl: string}) {}
}

export class GetStoreIndexNextPageSuccess implements Action {
    readonly type = GET_STORE_INDEX_NEXT_PAGE_SUCCESS;

    constructor(public payload: StoreIndexViewModel) {}
}

export type StoreIndexViewActions = 
    | SendStoreItemList
    | SendStoreItemListResult
    | SendStoreItemListFail
    | GetStoreIndex
    | GetStoreIndexSuccess
    | GetStoreIndexFail
    | GetStoreIndexNextPage
    | GetStoreIndexNextPageSuccess;