import { Action } from '@ngrx/store';

export enum UiActionTypes {
  UpdateUserName = '[Ui] Update User Name'
}

export class UpdateUserName implements Action {
  readonly type = UiActionTypes.UpdateUserName;
  constructor(public payload: string) {}
}

export type UiActions = UpdateUserName;
