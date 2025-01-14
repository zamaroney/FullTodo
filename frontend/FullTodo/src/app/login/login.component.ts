import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';
import {HardcodedAuthenticationService} from '../service/hardcoded-authentication.service';



@Component({
  selector: 'app-login',
  imports: [
    FormsModule,
    NgIf,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private router: Router,
              private hardcodedAuthenticationService: HardcodedAuthenticationService) { }

  username = 'zamaroney'
  password = 'dummy'
  errorMessage = 'Invalid username or password'
  invalidLogin = false;

  handleLogin() {
    // console.log(this.username);

    if(this.hardcodedAuthenticationService.authenticate(this.username, this.password)) {
      this.invalidLogin = false;
      this.router.navigate(['welcome', this.username]);
    }
    else {
      this.invalidLogin = true;
    }


  }
}
