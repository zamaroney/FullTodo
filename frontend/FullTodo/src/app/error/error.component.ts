import { Component } from '@angular/core';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-error',
  imports: [
    NgIf
  ],
  templateUrl: './error.component.html',
  styleUrl: './error.component.css'
})
export class ErrorComponent {
  errorMessage = 'Unable to retrieve Resources from the server';
  serverError = false;
}
