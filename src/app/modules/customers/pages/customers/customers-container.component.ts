import { Component, OnInit } from '@angular/core';
//import { CustomersDataService } from '../../services/customers.data.service';
import { Observable } from 'rxjs';
import { Customer } from '../../models/customer';
import { CustomersDataStoreService } from '../../store/data/data.store.service';
 
@Component({
  selector: 'app-customers-container',
  templateUrl: './customers-container.html',
  styleUrls: ['./customers-container.html']
})
export class CustomersContainerComponent implements OnInit {

  customers$: Observable<Array<Customer>>;
  selectedCustomer$: Observable<Customer>;

  //constructor(private customersDataService: CustomersDataService) {
    constructor(private customersDataService: CustomersDataStoreService) {

    this.customers$ = this.customersDataService.customersList$;
    this.selectedCustomer$ = this.customersDataService.selectedCustomer$;

   }

  ngOnInit() {
    this.customersDataService.loadCustomersAction();
  }


  onCustomerAdded(customer: Customer) {
    this.customersDataService.addCustomerAction(customer);

  }

  onCustomerSelected(id: number) {
    this.customersDataService.selectCustomerAction(id);
  }
}
