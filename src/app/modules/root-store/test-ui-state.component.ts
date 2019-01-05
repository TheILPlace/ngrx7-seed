import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromRoot from './store';
import * as fromUi from './store/ui'
import { UiSelectorsService } from './store/ui/ui.store.dervice';

@Component({
    selector: 'app-ui-state-tester',
    template: `user name is: {{userName$ | async}}`,
    styles: [``]
})
export class UiStateTesterComponent implements OnInit {
    userName$: Observable<string>;
 
    constructor(private uiSelectorsService: UiSelectorsService) {
      this.userName$ = uiSelectorsService.userName$;
      //store.select(fromRoot.getUserName);
    }
    ngOnInit() {
        this.uiSelectorsService.updateUserName('Dan Mark');
     }
}
