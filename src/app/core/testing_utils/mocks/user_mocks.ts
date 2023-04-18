import { User } from "../../../accounts/user.model";

export class UserMocks {

    static getUserPerms(){

        return [
            'can_accept_debt', 
            'can_apply_discount', 
        ]
    }

    static getUserModel(){
     
        let user = new User(
            'Jane Doe',
            'token.key',
            0,
            [] 
        );

        return user;
    }
    
    static getSuccuessUserLoginResponse(user: User){

        return {
            status: 200,
            body: {
                name: user.getName,
                token: user.getToken,
                user_type: user.getUserType
            },
            error: null,
            statusText: null
        }
    }

}