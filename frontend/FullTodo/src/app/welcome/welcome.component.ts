import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {WelcomeDataService} from '../service/data/welcome-data.service';
import {NgIf} from '@angular/common';

// Fixes Any error being thrown
/* eslint-disable  @typescript-eslint/no-explicit-any */


@Component({
  selector: 'app-welcome',
  imports: [
    RouterLink,
    NgIf
  ],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent implements OnInit {


  constructor(
    private route: ActivatedRoute,
    private service: WelcomeDataService) {
  }

  welcomeMessageFromService = ''
  name = ''

  ngOnInit() {
    this.name = this.route.snapshot.params['name'];
  }

  getWelcomeMessage() {
    console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
    // console.log('Last Line of getWelcomeMessage()')
  }

  getWelcomeMessageWithpath() {
    // console.log(this.service.executeHelloWorldBeanServiceWithPath(this.name));

    this.service.executeHelloWorldBeanServiceWithPath(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
    // console.log('Last Line of getWelcomeMessage()')
  }

  handleSuccessfulResponse(response: any) {
    //console.log(response.message);
    this.welcomeMessageFromService = response.message;
  }

  handleErrorResponse(error: any) {
    this.welcomeMessageFromService = error.error.message;
  }
}


