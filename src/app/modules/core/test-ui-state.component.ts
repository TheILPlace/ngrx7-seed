import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromRoot from './store';
import * as fromUi from './store/ui'

@Component({
    selector: 'app-ui-state-tester',
    template: `user name is: {{userName$ | async}}`,
    styles: [``]
})
export class UiStateTesterComponent implements OnInit {
    userName$: Observable<string>;
 
    constructor(private store: Store<fromRoot.State>) {
      this.userName$ = store.select(fromRoot.getUserName);
    }
    ngOnInit() {
        this.store.dispatch(new fromUi.UpdateUserName('Dan Mark'));
     }
}
