import { TestMockHttpParams, TestMockHttpResponseInterface } from './http_mock';
import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { Observable, of  } from 'rxjs';


@Injectable()
export class TestAuthHttpRequestInterceptorMock implements HttpInterceptor {
    constructor(private injector: Injector) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): 
              Observable<HttpEvent<any>> {

        if (request.params instanceof TestMockHttpParams && request.params.testMockedHttpResponse){

            let params: TestMockHttpResponseInterface = request.params.testMockedHttpResponse;
            let status = params.status

            if (status === 200){
                return of(new HttpResponse(request.params.testMockedHttpResponse));

            }else{

                throw new HttpErrorResponse({
                    error: params.error,
                    headers: new HttpHeaders(),
                    status: status,
                    statusText: params.statusText,
                    url: request.url
                });

            }
             
        }

        return of(new HttpResponse({ status: 200, body: {} }));
    }
}