import { Action } from '@ngrx/store';
import { DataActions, DataActionTypes } from './data.actions';

export interface State {

}

export const initialState: State = {

};

export function reducer(state = initialState, action: DataActions): State {
  switch (action.type) {

    case DataActionTypes.LoadDatas:
      return state;


    default:
      return state;
  }
}
