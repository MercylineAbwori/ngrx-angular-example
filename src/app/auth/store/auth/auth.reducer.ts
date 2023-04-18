import { User } from '../../user.model';
import * as AuthActions from './auth.actions';

export interface State {
  user: User;
  authError: string;
  loading: boolean;
}

export const initialState: State = {
  user: null,
  authError: null,
  loading: false
};

export function authReducer(
  state = initialState,
  action: AuthActions.AuthActions
) {
  switch (action.type) {
    
    case AuthActions.AUTHENTICATE_SUCCESS:
    case AuthActions.AUTO_LOGIN_SUCCESS:

    const user = action.payload;

    return {
        ...state,
        authError: null,
        user: user,
        loading: false
      };
      
    case AuthActions.LOGOUT:
      return {
        ...state,
        user: null
      };
    case AuthActions.LOGOUT_START:
        return {
          ...state
        };
    case AuthActions.LOGIN_START:
      
      return {
        ...state,
        authError: null,
        loading: true
      };
    case AuthActions.AUTHENTICATE_FAIL:
      return {
        ...state,
        user: null,
        authError: action.payload,
        loading: false
      };
    case AuthActions.CLEAR_ERROR:
      return {
        ...state,
        authError: null
      };

    case AuthActions.USER_DATA_FROM_WEBSOCKET:

        return {
            ...state, 
            user: action.payload
        };

    default:
      return state;
  }
}
