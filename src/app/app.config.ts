import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import {
  PreloadAllModules,
  provideRouter,
  withDisabledInitialNavigation,
  withPreloading,
} from '@angular/router';

import {
  BrowserModule,
  provideClientHydration,
  withHttpTransferCacheOptions,
} from '@angular/platform-browser';
import {
  BrowserAnimationsModule,
  provideAnimations,
} from '@angular/platform-browser/animations';
import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http';

import { routes } from './app.routes';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from './core/components/utils/http-loader-factory';
// import { translateBrowserLoaderFactory } from './core/components/utils/translate-browser.loader';

export const appConfig: ApplicationConfig = {
  providers: [
    // importProvidersFrom([BrowserModule, BrowserAnimationsModule]),
    importProvidersFrom([
      BrowserModule,
      BrowserAnimationsModule,
      TranslateModule.forRoot({
        defaultLanguage: 'en',
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient],
        },
      }),
    ]),
    provideRouter(
      routes,
      withPreloading(PreloadAllModules),
      withDisabledInitialNavigation()
    ),
    provideClientHydration(
      withHttpTransferCacheOptions({
        includePostRequests: true,
      })
    ),
    provideAnimations(),
    provideHttpClient(withFetch()),
  ],
};
