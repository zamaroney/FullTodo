import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    const username = 'zamaroney'
    const password = 'dummy'

    request = request.clone({
      setHeaders: {
        Authorization: `Basic ${window.btoa(username + ':' + password)}`
      }
    })

    return next.handle(request);
  }
}
