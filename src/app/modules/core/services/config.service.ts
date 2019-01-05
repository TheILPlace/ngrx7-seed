
import { Injectable } from '@angular/core';
import { CacheService } from './cache.service';
import { Configuration } from '../models/configuration';
import { HttpClient } from '@angular/common/http';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class ConfigService {
   private config: Configuration;
   constructor(private http: HttpClient, private cacheService: CacheService) {}

  load(url:string) {
    return new Promise((resolve) => {
      this.http.get<Configuration>(url).pipe(
        
        switchMap(config => {
          this.config = config;
          // return this.cacheService.loadCache(config);
          return of(true)

        })
      )
        .subscribe(() => {
            // save the cache
            console.log('finished loading ');
            resolve();
        });
    });

        }
getConfiguration(): Configuration {

    return this.config;
  }
}