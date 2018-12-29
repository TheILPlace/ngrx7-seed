import { Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Customer } from '../../../models/customer';

@Component({
  selector: 'app-customer-add',
  template: `
    <div><hr>
    Add new customer:
    <input #customerid placeholder="enter ID"/>
    <input #name placeholder="enter name"/>
    <input #address placeholder="enter address"/>
    <button (click)="addCustomer(customerid.value,name.value, address.value)">Add Customer</button>
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomerAddComponent implements OnInit {
  @Output() customerAdded: EventEmitter<Customer> = new EventEmitter<Customer>();
  constructor() { }

  ngOnInit() {
  }

  addCustomer(id: string, name: string, address: string) {
    const customer = new Customer();
    customer.id = +id;
    customer.name = name;
    customer.address = address;
    this.customerAdded.emit(customer);
  }

}
