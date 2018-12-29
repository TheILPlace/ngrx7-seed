import { Component, OnInit, Input, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import { Customer } from '../../../models/customer';

@Component({
  selector: 'app-customers-list',
  template: `
    <p>
      customers-list Works!
    </p>
    <ul>
    <li *ngFor="let customer of customers">
    {{customer.id}} : {{customer.name}} - {{customer.address}}
    <button (click)="customerSelected.emit(+customer.id)">Select</button>
    </li></ul>
    
    
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomersListComponent implements OnInit {

  @Input() customers: Customer[];
  @Output() customerSelected: EventEmitter<number> = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }



}
