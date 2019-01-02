import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersRoutingModule } from './customers-routing.module';

import * as fromCustomers from './store';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CustomerDataEffects } from './store/data/data.effects';

import { CustomersContainerComponent } from './pages/customers/customers-container.component';
import { CustomersListComponent } from './pages/customers/components/customers-list.component';
import { CustomerDetailsComponent } from './pages/customers/components/customer-details.component';
import { CustomerAddComponent } from './pages/customers/components/customer-add.component';

//import { CustomersDataService } from './services/customers.data.service';
import { CustomersDataStoreService } from './store/data/data.store.service';

@NgModule({
  declarations: [CustomersContainerComponent, CustomersListComponent, 
    CustomerDetailsComponent, CustomerAddComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    StoreModule.forFeature('customers', fromCustomers.reducers, {initialState: fromCustomers.INITIAL_CUSTOMERS_STATE}),
    EffectsModule.forFeature([CustomerDataEffects])
    
  ],
  providers: [//CustomersDataService, 
    CustomersDataStoreService]
})
export class CustomersModule { }
