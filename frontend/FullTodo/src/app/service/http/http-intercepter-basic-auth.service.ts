import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BasicAuthenticationService} from '../basic-authentication.service';

@Injectable({
  providedIn: 'root'
})

export class HttpIntercepterBasicAuthService implements HttpInterceptor {

  constructor(
    private basicAuthService : BasicAuthenticationService
  ) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>>{
    // const username = 'zamaroney'
    // const password = 'dummy'
    const basicAuthHeaderString = this.basicAuthService.getAuthenticatedToken();
    const username = this.basicAuthService.getAuthenticateduser();

    if (username && basicAuthHeaderString) {
      request = request.clone({
        setHeaders: {
          Authorization : basicAuthHeaderString
        }
      })
    }
    return next.handle(request);
  }
}
