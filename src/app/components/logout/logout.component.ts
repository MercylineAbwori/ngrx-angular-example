
import * as AuthActions from '../../auth/store/auth/auth.actions';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../../ng-store/app.reducer';
import { TestMockHttpResponseInterface } from '../../core/testing_utils/http_utils/http_mock';
import { AppUrls } from '../../core/api_urls/api_urls';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})

export class LogoutComponent implements OnInit, OnDestroy {

  // During testing, this variable is filled so that it can be passed into
  // TestAuthHttpRequestInterceptorMock. When not testing, it is ignored by other 
  // interceptors
  testMockedHttpResponse: TestMockHttpResponseInterface = null;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {

      this.store.dispatch(new AuthActions.LogoutStart(
          {
              requestUrl: this.getApiRequestUrl(),
              testMockedHttpResponse: this.testMockedHttpResponse}
      ));
  }

  ngOnDestroy() {
  }
  
  /**
   * Returns the api request url that should be used
   */
  getApiRequestUrl(){
      return AppUrls.LogoutUrl();
  }
}
