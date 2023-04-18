import { HttpParams } from '@angular/common/http';

export interface TestMockHttpResponseInterface {
    status: number, 
    body: any,
    error: any,
    statusText: string 
}

export class TestMockHttpParams extends HttpParams {
    constructor(public testMockedHttpResponse: TestMockHttpResponseInterface) {
        super();
    }
}

