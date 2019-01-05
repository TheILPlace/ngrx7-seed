import { Action } from '@ngrx/store';
import { Customer } from '../../models/customer';

export enum DataActionTypes {
  Load = '[Data] Load Customers',
  LoadSuccess = '[Data] Load Customers Success',
  Select = '[Data] Select Customer',
  Add = '[Data] Add Customer'

}

export class Load implements Action {
  readonly type = DataActionTypes.Load;
}
export class LoadSuccess implements Action {
  readonly type = DataActionTypes.LoadSuccess;

  constructor(public payload: Customer[]) { }

}
export class Select implements Action {
  readonly type = DataActionTypes.Select;

  constructor(public payload: number) { }

}
export class Add implements Action {
  readonly type = DataActionTypes.Add;

  constructor(public payload: Customer) { }

}

export type DataActions = Load 
                        | LoadSuccess 
                        | Select 
                        | Add;
