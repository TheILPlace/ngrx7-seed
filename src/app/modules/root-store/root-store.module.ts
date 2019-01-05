import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { reducers, metaReducers } from './store';
import { StoreModule } from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';
import { UiSelectorsService } from './store/ui/ui.store.dervice';
import { UiStateTesterComponent } from './test-ui-state.component';

@NgModule({
  declarations: [UiStateTesterComponent],
  exports: [UiStateTesterComponent],
  imports: [
    CommonModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    // Connects RouterModule with StoreModule
    StoreRouterConnectingModule.forRoot(),
    EffectsModule.forRoot([])
  ],
  providers: [UiSelectorsService]
})
export class RootStoreModule { }
