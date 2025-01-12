import {FormsModule} from '@angular/forms';

import {BrowserModule} from '@angular/platform-browser';

import {ApplicationConfig, importProvidersFrom} from '@angular/core';

import {provideRouter} from '@angular/router';

import {routes} from './app.routes';

import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';


export const appConfig: ApplicationConfig = {

  providers: [importProvidersFrom(BrowserModule, FormsModule), provideRouter(routes),

    provideHttpClient(withInterceptorsFromDi())]

};
