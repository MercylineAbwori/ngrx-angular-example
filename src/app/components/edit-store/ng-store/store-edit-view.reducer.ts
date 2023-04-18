import * as StoreEditActions from './store-edit-view.actions';

export interface State {
    requestError: string;
    loading: boolean;
}
  
const initialState: State = {
    requestError: null,
    loading: false
};

export function storeEditViewReducer(
    state = initialState,
    action: StoreEditActions.StoreEditActions){

    switch (action.type) {

        case StoreEditActions.SEND_STORE_EDIT:
            return {
                ...state,
                requestError: null,
                loading: true
            };

        case StoreEditActions.SEND_STORE_EDIT_SUCCESS:   
            return {
                ...state,
                requestError: null,
                loading: false
            };

        case StoreEditActions.SEND_STORE_EDIT_FAIL:   
            return {
                ...state,
                requestError: action.payload,
                loading: false
            };

        default:
      return state;
  } 
}