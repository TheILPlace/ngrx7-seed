import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { reducers, metaReducers } from './store';
import { StoreModule } from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule, NavigationActionTiming } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';
import { UiSelectorsService } from './store/ui/ui.store.dervice';
import { UiStateTesterComponent } from './test-ui-state.component';
import { CustomSerializer } from './store/router/custom-router-state-serializer ';
import { RouterEffects } from './store/router';

@NgModule({
  declarations: [UiStateTesterComponent],
  exports: [UiStateTesterComponent],
  imports: [
    CommonModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    // Connects RouterModule with StoreModule
    StoreRouterConnectingModule.forRoot({stateKey:'router',
        navigationActionTiming: NavigationActionTiming.PostActivation,
        serializer: CustomSerializer}),
    EffectsModule.forRoot([RouterEffects])
  ],
  providers: [UiSelectorsService]
})
export class RootStoreModule { }
