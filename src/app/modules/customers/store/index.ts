import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../../environments/environment';
import * as fromData from './data/data.reducer';

export interface State {

  data: fromData.State;
}

export const reducers: ActionReducerMap<State> = {

  data: fromData.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
