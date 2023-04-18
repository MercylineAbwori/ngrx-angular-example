import { ActionReducerMap } from '@ngrx/store';

import * as fromSnackbar from './snackbar/snackbar.reducer';

import * as fromAuth from '../auth/store/auth/auth.reducer';
'src/app/components'

import * as fromStoreIndexView from '../components/store-list/ng-store/store-index-view.reducer';
import * as fromLeanStoreIndexView from '../components/lean-store-index-view/ng-store/lean-store-index-view.reducer';
import * as fromStoreView from '../components/view-store/ng-store/store-view.reducer';
import * as fromStoreEditView from '../components/edit-store/ng-store/store-edit-view.reducer';

export interface AppState {
    snackbar: fromSnackbar.State,
    auth: fromAuth.State,

    storeIndexView: fromStoreIndexView.State,
    leanStoreIndexView: fromLeanStoreIndexView.State,

    storeView: fromStoreView.State,
    storeEditView: fromStoreEditView.State,
}

export const reducers: ActionReducerMap<AppState> = {
    snackbar: fromSnackbar.snackbarReducer,
    auth: fromAuth.authReducer,

    storeIndexView: fromStoreIndexView.storeIndexViewReducer,
    leanStoreIndexView: fromLeanStoreIndexView.leanStoreIndexViewReducer,
    storeView: fromStoreView.storeViewReducer,
    storeEditView: fromStoreEditView.storeEditViewReducer,
};
