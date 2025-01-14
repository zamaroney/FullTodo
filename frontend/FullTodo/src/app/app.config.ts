import {FormsModule} from '@angular/forms';

import {BrowserModule} from '@angular/platform-browser';

import {ApplicationConfig, importProvidersFrom} from '@angular/core';

import {provideRouter} from '@angular/router';

import {routes} from './app.routes';

import {HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';
import {HttpIntercepterBasicAuthService} from './service/http/http-intercepter-basic-auth.service';


export const appConfig: ApplicationConfig = {

  providers: [importProvidersFrom(BrowserModule, FormsModule), provideRouter(routes),
    { provide: HTTP_INTERCEPTORS, useClass: HttpIntercepterBasicAuthService, multi: true },
    provideHttpClient(withInterceptorsFromDi())]

};
