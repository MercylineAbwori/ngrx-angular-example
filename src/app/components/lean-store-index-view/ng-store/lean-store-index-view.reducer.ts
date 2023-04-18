import { LeanStoreIndexViewModel } from '../lean-store-index-view.model';
import * as LeanStoreIndexViewActions from './lean-store-index-view.actions';
import { LeanStoreIndexResultsArrayInterface } from './lean-store-index-view.interfaces';

export interface State {
    leanStoreIndexView: LeanStoreIndexViewModel;
    requestError: string;
    loading: boolean;
    paginationRequestError: string;
    paginationLoading: boolean;
}
  
const initialState: State = {
    leanStoreIndexView: null,
    requestError: null,
    loading: false,
    paginationRequestError: null,
    paginationLoading: false,
};

export function leanStoreIndexViewReducer(
    state = initialState,
    action: LeanStoreIndexViewActions.LeanStoreIndexViewActions){

    switch (action.type) {

        case LeanStoreIndexViewActions.GET_LEAN_STORE_INDEX:
            
            return {
                ...state,
                requestError: null,
                loading: true
            };

        case LeanStoreIndexViewActions.GET_LEAN_STORE_INDEX_SUCCESS:
            return {
                ...state,
                leanStoreIndexView: action.payload,
                requestError: null,
                loading: false
            };

        case LeanStoreIndexViewActions.GET_LEAN_STORE_INDEX_FAIL:
                    
            return {
                ...state,
                leanStoreIndexView: null,
                requestError: action.payload,
                loading: false
            };

        case LeanStoreIndexViewActions.GET_LEAN_STORE_INDEX_NEXT_PAGE:
            return {
                ...state,
                paginationRequestError: null,
                paginationLoading: true,
            };

        case LeanStoreIndexViewActions.GET_LEAN_STORE_INDEX_NEXT_PAGE_SUCCESS:
            
            // We create a new lean store with update count and next url from the
            // received payload.

            // We also combine the lean stores in our current store and those ones that 
            // we've received from the pagination payload and then inserts them
            // into the new lean stores.

            let combinedLeanStores:Array<LeanStoreIndexResultsArrayInterface> = [
                ...state.leanStoreIndexView.getStores, 
                ...action.payload.getStores];

            const newLeanStore = new LeanStoreIndexViewModel(
                action.payload.getCount,
                action.payload.getNextUrl,
                combinedLeanStores,
                action.payload.getClusters
            )

            return {
                ...state,
                leanStoreIndexView: newLeanStore,
                requestError: null,
                paginationLoading: false,
            };

        default:
      return state;
  }

}