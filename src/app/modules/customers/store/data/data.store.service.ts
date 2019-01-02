import { Injectable } from '@angular/core';
import * as fromData from './index';
import * as fromRoot from '../index';
import { Store, createSelector, select, createFeatureSelector } from '@ngrx/store';
import { Customer } from '../../models/customer';


@Injectable()
export class CustomersDataStoreService {


    getCustomersFeatureState = createFeatureSelector<fromRoot.State>('customers');

    // get the 'data' part of the customer's state
    getCustomersDataState = createSelector(this.getCustomersFeatureState, state => state.data);
    // expose the inner selectors from the 'data' reducer
    getCustomersList = createSelector(this.getCustomersDataState, (state: fromData.State) => state.customers);
    getIsCustomersLoaded = createSelector(this.getCustomersDataState, (state: fromData.State) => state.loaded);
    getSelectedCustomerId = createSelector(this.getCustomersDataState, (state: fromData.State) => state.selectedCustomerId);
    
    getSelectedCustomer = createSelector(this.getCustomersList, this.getSelectedCustomerId, (_customers: Customer[], _selectedId: number) => {
        return _customers.filter((customer: Customer) => customer.id === _selectedId)[0];
    });
    

    constructor(private store: Store<fromData.State>) {}

    //selectors

    customersList$ = this.store.select(this.getCustomersList);
    isCustomersLoaded$ = this.store.select(this.getIsCustomersLoaded);
    selectedCustomerId$ = this.store.select(this.getSelectedCustomerId);
    selectedCustomer$ = this.store.select(this.getSelectedCustomer);


    // dispachers

    loadCustomersAction() {
        this.store.dispatch(new fromData.Load());
    }

    selectCustomerAction(id: number) {
        this.store.dispatch(new fromData.Select(id));
    }

    addCustomerAction(customer: Customer) {
        this.store.dispatch(new fromData.Add(customer));
    }



}

