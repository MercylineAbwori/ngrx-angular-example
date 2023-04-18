import { StoreIndexViewModel } from 'src/app/models/store-index-view.model';
import * as StoreIndexViewActions from './store-index-view.actions';
import { StoreIndexResultsArrayInterface, StoreSendItemListResponseDataInterface } from './store-index-view.interfaces';

export interface State {
    storeIndexView: StoreIndexViewModel;
    sendItemListResult: StoreSendItemListResponseDataInterface;
    requestError: string;
    loading: boolean;
    paginationRequestError: string;
    paginationLoading: boolean;
}
  
const initialState: State = {
    storeIndexView: null,
    sendItemListResult: null,
    requestError: null,
    loading: false,
    paginationRequestError: null,
    paginationLoading: false,
};

export function storeIndexViewReducer(
    state = initialState,
    action: StoreIndexViewActions.StoreIndexViewActions){

    switch (action.type) {

        case StoreIndexViewActions.SEND_STORE_ITEM_LIST:
            return {
                ...state,
                requestError: null,
                loading: true
            };

        case StoreIndexViewActions.SEND_STORE_ITEM_LIST_RESULT:   
            return {
                ...state,
                sendItemListResult: action.payload,
                requestError: null,
                loading: false
            };

        case StoreIndexViewActions.GET_STORE_INDEX:
            
            return {
                ...state,
                requestError: null,
                loading: true
            };

        case StoreIndexViewActions.GET_STORE_INDEX_SUCCESS:
            return {
                ...state,
                storeIndexView: action.payload,
                requestError: null,
                loading: false
            };

        case StoreIndexViewActions.GET_STORE_INDEX_FAIL:
                    
            return {
                ...state,
                storeIndexView: null,
                requestError: action.payload,
                loading: false
            };

        case StoreIndexViewActions.GET_STORE_INDEX_NEXT_PAGE:
            return {
                ...state,
                paginationRequestError: null,
                paginationLoading: true,
            };

        case StoreIndexViewActions.GET_STORE_INDEX_NEXT_PAGE_SUCCESS:
            
            // We create a new store with update count and next url from the
            // received payload.

            // We also combine the stores in our current store and those ones that 
            // we've received from the pagination payload and then inserts them
            // into the new store.

            let combinedStores:Array<StoreIndexResultsArrayInterface> = [
                ...state.storeIndexView.getStores, 
                ...action.payload.getStores];

            const newStore = new StoreIndexViewModel(
                action.payload.getCount,
                action.payload.getNextUrl,
                combinedStores
                )

            return {
                ...state,
                storeIndexView: newStore,
                requestError: null,
                paginationLoading: false,
            };

        default:
      return state;
  }
}