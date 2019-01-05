import { Injectable } from '@angular/core';
import * as fromUi from './index';
import { Store, createSelector, select, createFeatureSelector } from '@ngrx/store';



@Injectable()
export class UiSelectorsService {



  constructor(private store: Store<fromUi.State>) {
  }

  getUiState = createFeatureSelector<fromUi.State>(
    'ui'
  );
  getUserName = createSelector(this.getUiState, (state: fromUi.State) => state.userName);


  //selectors
  userName$ = this.store.select(this.getUserName);

  // dispachers

  updateUserName(userName: string) {
    this.store.dispatch(new fromUi.UpdateUserName(userName));
  }

}