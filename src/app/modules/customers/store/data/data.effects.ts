import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromDataActions from './data.actions';
import { Customer } from '../../models/customer';
import { switchMap, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { HttpService } from '../../../core/services/http.service';

@Injectable()
export class CustomerDataEffects {

  @Effect()
  load$ = this.actions$.pipe(
    ofType(fromDataActions.DataActionTypes.Load),
    map((action) =>
    // this.httpService.get<Customer[])('customers').pipe(
    //   map((customers: Customer[]) => new fromData.LoadSuccess(customers))
    // )
    {
      const customers = new Array<Customer>();

      const customer = new Customer;
      customer.id = 1;
      customer.name = 'John Doe';
      customer.address = 'the moon';

      const customer2 = new Customer;
      customer2.id = 2;
      customer2.name = 'King Solomon';
      customer2.address = 'Rome';

      customers.push(customer);
      customers.push(customer2);
      return  new fromDataActions.LoadSuccess(customers);
    }

    )
  );

  constructor(private actions$: Actions, httpService: HttpService) { }
}
