import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(
    private http:HttpClient,
  ) { }

  authenticate(username:string, password:string) {
    // console.log('before ' + this.isUserLoggedIn())
    if(username === 'zamaroney' && password === 'dummy'){
      sessionStorage.setItem('authenticatedUser', username);
      // console.log('after ' + this.isUserLoggedIn())
      return true;
    }
    else {
      return false;
    }
  }

  executeAuthenticationService(username:string, password:string) {
    let basicAuthHeaderString:string =  'Basic ' + window.btoa(username + ':' + password);

    const headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    })

    return this.http.get<AuthenticationBean>(
      `http://localhost:8080/basicauth`,
      {headers}).pipe(
        map(
          data => {
            sessionStorage.setItem('authenticatedUser', username);
            return data;
          }
        )
    );
    //console.log("Execute Hello World Bean Service")
  }

  isUserLoggedIn() {
    const user = sessionStorage.getItem('authenticatedUser');
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem('authenticatedUser');
  }
}

export class AuthenticationBean {
  constructor(public message: string) { }
}
