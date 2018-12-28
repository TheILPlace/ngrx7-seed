import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';
import { storeFreeze } from 'ngrx-store-freeze';

import { environment } from '../../../../environments/environment';

export interface State {
  router: fromRouter.RouterReducerState;

}

export const INITIAL_STATE: State = {

  router: undefined
};

export const reducers: ActionReducerMap<State> = {
  router: fromRouter.routerReducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [storeFreeze] : [];
