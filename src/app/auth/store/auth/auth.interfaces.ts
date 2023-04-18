import { TestMockHttpResponseInterface } from "../../../core/testing_utils/http_utils/http_mock";


export interface AuthResponseData {
    email: string,
    name: string,
    token: string,
    user_type: number,
    user_perms: Array<string>
}

