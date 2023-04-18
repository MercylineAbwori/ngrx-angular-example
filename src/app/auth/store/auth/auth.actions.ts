import { TestMockHttpResponseInterface } from 'src/app/core/testing_utils/http_utils/http_mock';
import { User } from '../../user.model';
import { Action } from '@ngrx/store';

export const LOGIN_START = '[Auth] Login Start';
export const AUTHENTICATE_SUCCESS = '[Auth] Login Success';
export const AUTHENTICATE_FAIL = '[Auth] Login Fail';
export const CLEAR_ERROR = '[Auth] Clear Error';
export const AUTO_LOGIN_SUCCESS = '[Auth] Auto Login Success';
export const AUTO_LOGIN = '[Auth] Auto Login';
export const LOGOUT_START = '[Auth] Logout Start';
export const LOGOUT = '[Auth] Logout';
export const USER_DATA_FROM_WEBSOCKET = '[Auth] User Data From Websocket';

export class AuthenticateSuccess implements Action {
  readonly type = AUTHENTICATE_SUCCESS;

  constructor(public payload: User) {}
}

export class LogoutStart implements Action {
  readonly type = LOGOUT_START;

  constructor(public payload: {
    requestUrl: string,
    testMockedHttpResponse: TestMockHttpResponseInterface}) {}
}

export class Logout implements Action {
  readonly type = LOGOUT;
}

export class LoginStart implements Action {
    readonly type = LOGIN_START;

    constructor(public payload: {
        requestData: {
            email: string; 
            password: string 
        },
        requestUrl: string,
        testMockedHttpResponse: TestMockHttpResponseInterface
    }){}
}

export class AuthenticateFail implements Action {
  readonly type = AUTHENTICATE_FAIL;

  constructor(public payload: string) {}
}

export class ClearError implements Action {
  readonly type = CLEAR_ERROR;
}

export class AutoLoginSuccess implements Action {
  readonly type = AUTO_LOGIN_SUCCESS;

  constructor(public payload: User) {}
}

export class AutoLogin implements Action {
  readonly type = AUTO_LOGIN;
}

export class UpdateUserDataFromWebsocket implements Action {
    readonly type = USER_DATA_FROM_WEBSOCKET;
  
    constructor(public payload: User) {}
}

export type AuthActions =
  | AuthenticateSuccess
  | LogoutStart
  | Logout
  | LoginStart
  | AuthenticateFail
  | ClearError
  | AutoLoginSuccess
  | AutoLogin
  | UpdateUserDataFromWebsocket;
