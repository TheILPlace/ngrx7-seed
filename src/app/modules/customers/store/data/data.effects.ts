import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { DataActionTypes } from './data.actions';

@Injectable()
export class DataEffects {

  @Effect()
  loadDatas$ = this.actions$.pipe(ofType(DataActionTypes.LoadDatas));

  constructor(private actions$: Actions) {}
}
