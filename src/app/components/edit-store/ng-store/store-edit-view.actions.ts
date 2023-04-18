import { Action } from '@ngrx/store';
import { TestMockHttpResponseInterface } from '../../../core/testing_utils/http_utils/http_mock';

export const SEND_STORE_EDIT = '[Store Edit] Send Store Edit';
export const SEND_STORE_EDIT_SUCCESS = '[Store Edit] Send Store Edit Success';
export const SEND_STORE_EDIT_FAIL = '[Store Edit] Send Store Edit Failure';


export interface StoreEditRequestDataInterface {
    requestData: {
        enabled: boolean,
        min_sale_value: string,
        days_to_go_back: string,
        shop_rent: string,
    },
    requestUrl: string,
    testMockedHttpResponse: TestMockHttpResponseInterface
}

export class SendStoreEdit implements Action {
    readonly type = SEND_STORE_EDIT;

    constructor(public payload: StoreEditRequestDataInterface) {}
}

export class SendStoreEditSuccess implements Action {
    readonly type = SEND_STORE_EDIT_SUCCESS;
}

export class SendStoreEditFail implements Action {
    readonly type = SEND_STORE_EDIT_FAIL;

    constructor(public payload: string) {}
}

export type StoreEditActions = 
    | SendStoreEdit
    | SendStoreEditSuccess
    | SendStoreEditFail ;