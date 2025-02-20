import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs';
import {API_URL} from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(
    private http:HttpClient,
  ) { }

  executeAuthenticationService(username:string, password:string) {
    const basicAuthHeaderString:string =  'Basic ' + window.btoa(username + ':' + password);

    const headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    })

    return this.http.get<AuthenticationBean>(
      `${API_URL}/basicauth`,
      {headers}).pipe(
        map(
          data => {
            sessionStorage.setItem(TOKEN, basicAuthHeaderString);
            sessionStorage.setItem(AUTHERIZED_USER, username);
            return data;
          }
        )
    );
    //console.log("Execute Hello World Bean Service")
  }

  getAuthenticateduser() {
    return sessionStorage.getItem(AUTHERIZED_USER);
  }

  getAuthenticatedToken() {
    if (this.getAuthenticateduser()) {
      return sessionStorage.getItem(TOKEN);
    }
    return null;
  }

  executeJWTAuthenticationService(username:string, password:string) {
    return this.http.post<AuthResponse>(
      `${API_URL}/authenticate`, {
        username,
        password
      }).pipe(
      map(
        data => {
          sessionStorage.setItem(TOKEN, `bearer ${data.token}`);
          sessionStorage.setItem(AUTHERIZED_USER, username);
          return data;
        }
      )
    );
    //console.log("Execute Hello World Bean Service")
  }

  isUserLoggedIn() {
    const user = sessionStorage.getItem(AUTHERIZED_USER);
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem(AUTHERIZED_USER);
    sessionStorage.removeItem(TOKEN);
  }
}

export const TOKEN = 'token'
export const AUTHERIZED_USER = 'authenticatedUser'

export class AuthenticationBean {
  constructor(public message: string) { }
}

export interface AuthResponse {
  token: string;
}
