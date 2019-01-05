import { NgModule, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from '../../../environments/environment';
import { HttpService } from './services/http.service';
import { ConfigService } from './services/config.service';
import { CacheService } from './services/cache.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CustomInterceptor } from './services/custome-http-interceptor';



export function ConfigLoader(configService: ConfigService) {
  // Note: this factory need to return a function (that return a promise)
  console.log('before load config');
  return () => configService.load(environment.configFile);
}
@NgModule({
  declarations: [],
  imports: [
    CommonModule, HttpClientModule
   
    
  ],
  providers: [HttpService, ConfigService, CacheService,
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
