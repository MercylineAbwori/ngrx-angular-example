import * as SnackbarActions from './snackbar.actions';

export interface State {
    message: string;
}
  
const initialState: State = {
    message: null,
};

export function snackbarReducer(
    state = initialState, 
    action: SnackbarActions.SnackbarActions
  ) {

    switch (action.type) {

        case SnackbarActions.SHOW_SNACKBAR:
            return {
                ...state,
                message: action.payload.message
            };

        default:
      return state;
  }

}