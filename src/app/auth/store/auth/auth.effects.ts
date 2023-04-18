import { AccessUserLocalStorage } from '../../../core/local-storage/local_storage_handlers';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { switchMap, catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import * as AuthActions from './auth.actions';
import { User } from '../../user.model';
import { AuthResponseData } from './auth.interfaces';
import { TestMockHttpParams } from '../../../core/testing_utils/http_utils/http_mock';

const handleAuthentication = (
    name: string,
    token: string,
    user_type: number,
    user_perms: Array<string>
) => {
    const user = new User(
        name=name,
        token=token,
        user_type=user_type,
        user_perms=user_perms
    );

    // Store new user locally
    AccessUserLocalStorage.storeUserData(user);

    return new AuthActions.AuthenticateSuccess(user);
};

const handleError = (errorRes: any) => {
    return of(new AuthActions.AuthenticateFail(errorRes));
};

@Injectable()
export class AuthEffects {
    
    authLogin$ = createEffect(() => this.actions$.pipe(
        ofType(AuthActions.LOGIN_START),
        switchMap((authData: AuthActions.LoginStart) => {

            return this.http
                .post<AuthResponseData>(
                    authData.payload.requestUrl,
                    {
                        username: authData.payload.requestData.email,
                        password: authData.payload.requestData.password,
                    },
                    { params: new TestMockHttpParams(authData.payload.testMockedHttpResponse) }
                )
                .pipe(
                    map(resData => {
                        return handleAuthentication(
                            resData.name,
                            resData.token,
                            resData.user_type,
                            resData.user_perms
                        );
                    }),
                    catchError(errorRes => {
                        return handleError(errorRes);
                    })
                );
        })
    ));

    authRedirect = createEffect(
        () => this.actions$.pipe(
            ofType(AuthActions.AUTHENTICATE_SUCCESS),
            tap(() => {
    
                this.router.navigate(['store-list']);
            })
        ),
        { dispatch: false }
        // AuthActions.AUTHENTICATE_SUCCESS is not dispatched
    );

    autoLoginSuccess = createEffect(
        () => this.actions$.pipe(
            ofType(AuthActions.AUTO_LOGIN_SUCCESS),
            tap(() => {this.router.navigate(['store-list']);})
        ),
        { dispatch: false }
        // AuthActions.AUTHENTICATE_SUCCESS is not dispatched
    );

    autoLogin = createEffect(() => this.actions$.pipe(
        ofType(AuthActions.AUTO_LOGIN),
        map(() => {

            const userData = AccessUserLocalStorage.retrieveStoredUserData();

            if (!userData) {
                return { type: 'Empty' };
            }

            const loadedUser = new User(
                userData.name,
                userData.token,
                userData.user_type,
                userData.user_perms
            );

            if (loadedUser.getToken) {
                return new AuthActions.AutoLoginSuccess(loadedUser);
            }

            return { type: 'Empty' };
        })
    ));

    authLogout$ = createEffect(
        () => this.actions$.pipe(
            ofType(AuthActions.LOGOUT),
            tap(() => {
                AccessUserLocalStorage.removeStoredUserData();
                this.router.navigate(['auth-login']);
            })
        ),
        { dispatch: false }
        // AuthActions.LOGOUT is not dispatched
    );

    authLogoutStart$ = createEffect(() => this.actions$.pipe(
        ofType(AuthActions.LOGOUT_START),
        switchMap((action: AuthActions.LogoutStart) => {
            return this.http.get(
                action.payload.requestUrl,
                { params: new TestMockHttpParams(action.payload.testMockedHttpResponse) }

            ).pipe(map(resData => {
                // We don't need to use of() in map
                return new AuthActions.Logout();

            }),
                catchError(error => {
                    return of(new AuthActions.Logout());
                })
            );
        }),
    ));

    constructor(
        private actions$: Actions,
        private http: HttpClient,
        private router: Router,
    ) { }
}
