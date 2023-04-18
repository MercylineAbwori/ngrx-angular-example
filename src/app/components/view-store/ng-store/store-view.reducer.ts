import { StoreViewModel } from 'src/app/models/store-view.model';
import * as StoreViewActions from './store-view.actions';

export interface State {
    storeView: StoreViewModel;
    requestError: string;
    loading: boolean;
}
  
const initialState: State = {
    storeView: null,
    requestError: null,
    loading: false
};

export function storeViewReducer(
    state = initialState,
    action: StoreViewActions.StoreViewActions){

    switch (action.type) {

        case StoreViewActions.GET_STORE:
            
            return {
                ...state,
                requestError: null,
                loading: true
            };

        case StoreViewActions.GET_STORE_SUCCESS:
            return {
                ...state,
                storeView: action.payload,
                requestError: null,
                loading: false
            };

        case StoreViewActions.GET_STORE_FAIL:
                    
            return {
                ...state,
                storeView: null,
                requestError: action.payload,
                loading: false
            };

        case StoreViewActions.GET_STORE_DELETE:
            
            return {
                ...state,
                requestError: null,
                loading: true
            };

        case StoreViewActions.GET_STORE_DELETE_FAIL:
                        
            return {
                ...state,
                storeView: null,
                requestError: action.payload,
                loading: false
            };

        default:
      return state;
  }

   
}