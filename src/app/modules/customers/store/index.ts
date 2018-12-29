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

export const INITIAL_CUSTOMERS_STATE: State = {

  data: fromData.initialState
};

//export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

// Selectors
/**
 * The createFeatureSelector function selects a piece of state from the root of the state object.
 * This is used for selecting feature states that are loaded eagerly or lazily.
*/
export const getCustomersFeatureState = createFeatureSelector<State>('customers');

// get the 'data' part of the customer's state
export const getCustomersDataState = createSelector(getCustomersFeatureState,  state => state.data);
// expose the inner selectors from the 'data' reducer
export const getCustomersList = createSelector(getCustomersDataState, fromData.getCustomers);
export const getIsCustomersLoaded = createSelector(getCustomersDataState, fromData.getIsLoaded);
export const getSelectedCustomer = createSelector(getCustomersDataState, fromData.getSelectedCustomer);
