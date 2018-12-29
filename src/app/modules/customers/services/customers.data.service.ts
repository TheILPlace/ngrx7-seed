import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Store } from '@ngrx/store';
import { Customer } from '../models/customer';

import * as fromCustomers from '../store/'; // for the selectors
import * as fromCustomersData from '../store/data'; // for the actions related to the 'data' reducer

@Injectable()
export class CustomersDataService {

    constructor(private store: Store<fromCustomers.State>) {
    }

    getIsCustomersLoaded() {
        return this.store.select(fromCustomers.getIsCustomersLoaded);
    }

    getCustomersList() {
        return this.store.select(fromCustomers.getCustomersList);
    }

    getSelectedCustomer() {
        return this.store.select(fromCustomers.getSelectedCustomer);
    }


    loadCustomersAction() {
        this.store.dispatch(new fromCustomersData.Load());
    }

    selectCustomerAction(id: number) {
        this.store.dispatch(new fromCustomersData.Select(id));
    }

    addCustomerAction(customer: Customer) {
        this.store.dispatch(new fromCustomersData.Add(customer));
    }

    
};
