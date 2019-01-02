import { NgModule, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../../environments/environment';
import { UiStateTesterComponent } from './test-ui-state.component';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { HttpService } from './services/http.service';
import { ConfigService } from './services/config.service';
import { CacheService } from './services/cache.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CustomInterceptor } from './services/custome-http-interceptor';
import { EffectsModule } from '@ngrx/effects';
import { UiSelectorsService } from './store/ui/ui.store.dervice';



export function ConfigLoader(configService: ConfigService) {
  // Note: this factory need to return a function (that return a promise)
  console.log('before load config');
  return () => configService.load(environment.configFile);
}
@NgModule({
  declarations: [UiStateTesterComponent],
  exports: [UiStateTesterComponent],
  imports: [
    CommonModule, HttpClientModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    // Connects RouterModule with StoreModule
    StoreRouterConnectingModule.forRoot(),
    EffectsModule.forRoot([])
    
  ],
  providers: [HttpService, ConfigService, CacheService, UiSelectorsService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CustomInterceptor ,
      multi: true
    },
    {
      provide: APP_INITIALIZER,
      useFactory: ConfigLoader,
      deps: [ConfigService],
      multi: true
    }
  ]
 

})
export class CoreModule { }
