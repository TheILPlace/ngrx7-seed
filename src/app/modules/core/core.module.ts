import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../../environments/environment';
import { UiStateTesterComponent } from './test-ui-state.component';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

@NgModule({
  declarations: [UiStateTesterComponent],
  exports: [UiStateTesterComponent],
  imports: [
    CommonModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    // Connects RouterModule with StoreModule
    StoreRouterConnectingModule.forRoot(),
    
  ]
})
export class CoreModule { }
