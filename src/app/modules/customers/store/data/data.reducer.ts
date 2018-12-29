import { Action, createSelector } from '@ngrx/store';
import { DataActions, DataActionTypes } from './data.actions';
import { Customer } from '../../models/customer';
import { cloneDeep} from 'lodash';


export interface State {
  customers: Array<Customer>;
  loaded: boolean;
  selectedCustomerId: number;
}

export const initialState: State = {
  customers: [],
  loaded: false,
  selectedCustomerId: null

};

export function reducer(state = initialState, action: DataActions): State {

  let newState: State;

  switch (action.type) {

    // case DataActionTypes.Load:
    //   return state;


    case DataActionTypes.LoadSuccess:
      newState = {...state, customers: action.payload, loaded: true, selectedCustomerId: null}
      break;

    case DataActionTypes.Select:
      newState = {...state, selectedCustomerId: action.payload};
      break;

    case DataActionTypes.Add:
      newState = {...state, customers: [...state.customers, cloneDeep(action.payload)]};
      break;

    default:
      return state;
  }

  return newState;
}


// Selectors !
export const getCustomers = (state: State) => state.customers;
export const getIsLoaded = (state: State) => state.loaded;
export const getSelectedCustomerId = (state: State) => state.selectedCustomerId;
export const getSelectedCustomer = createSelector(getCustomers, getSelectedCustomerId, (_customers: Customer[], _selectedId: number) => {
    return _customers.filter((customer: Customer) => customer.id === _selectedId)[0];
});
