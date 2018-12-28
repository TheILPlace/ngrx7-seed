import { Action } from '@ngrx/store';
import * as fromUiActions from './ui.actions';

export interface State {
  userName: string;
}

export const initialState: State = {
  userName : ''

};

export function reducer(state = initialState, action: fromUiActions.UiActions): State {

  let newState: State;

  switch (action.type) {

    case fromUiActions.UiActionTypes.UpdateUserName:
      newState = {...state, userName: action.payload};
      break;
    

    default:
      return state;
    
   
  }
  return newState;
}


//  SELECTORS

export const getUserName = (state: State) => state.userName;

