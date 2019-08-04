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
import * as fromUi from './ui/';
import { RouterReducerState } from '@ngrx/router-store';
import { RouterStateUrl } from './router/custom-router-state-serializer ';

export interface State {
  router: fromRouter.RouterReducerState;
  ui: fromUi.State;

}

export const INITIAL_STATE: State = {

  router: undefined,
  ui: fromUi.initialState
};

export const reducers: ActionReducerMap<State> = {
  router: fromRouter.routerReducer,
  ui: fromUi.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [storeFreeze] : [];

// SELECTORS

// UI
// export const getUiState = (state: State) => state.ui;
// export const getUserName = createSelector(getUiState, fromUi.getUserName);

// ROUTER SELECTOR

export const selectReducerState = createFeatureSelector<
  RouterReducerState<RouterStateUrl>
>("router");
export const getRouterInfo = createSelector(
  selectReducerState,
  state => state.state
);