import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { StoreModule } from '@ngrx/store';
import * as fromCustomers from './store';





@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    StoreModule.forFeature('customers', fromCustomers.reducers, { metaReducers: fromCustomers.metaReducers }),
    
  ]
})
export class CustomersModule { }
