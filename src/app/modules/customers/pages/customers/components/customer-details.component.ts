import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Customer } from '../../../models/customer';


@Component({
  selector: 'app-customer-details',
  template: `
    <p>
      customers-details Works!
    </p>
    <div>
    {{customer?.id}} : {{customer?.name}} - {{customer?.address}}
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomerDetailsComponent implements OnInit {
@Input() customer: Customer;

  constructor() { }

  ngOnInit() {
  }

}
