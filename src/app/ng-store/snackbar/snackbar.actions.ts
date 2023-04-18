import { Action } from "@ngrx/store";

interface SnackbarMessagePayloadInterface {
    message: string;
}

export const SHOW_SNACKBAR = '[Snackbar] Show Snackbar';

export class ShowSnackbar implements Action {
    readonly type = SHOW_SNACKBAR;
  
    constructor(public payload: SnackbarMessagePayloadInterface) {}
}

export type SnackbarActions = 
  | ShowSnackbar