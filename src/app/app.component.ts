import { Component } from '@angular/core';
import {AuthenticationService} from "./authentication.service";
import {LoginResponse} from "./model/login-response";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'weatherman';

  constructor(private authenticationService : AuthenticationService) { }

  public get getCurrentValue(): LoginResponse | undefined {
    return this.authenticationService.getCurrentUserValue
  }

  public logout() {
    this.authenticationService.logout();
  }

}

