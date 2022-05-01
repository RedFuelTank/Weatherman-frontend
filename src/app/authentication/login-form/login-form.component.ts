import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticationService} from "../service/authentication.service";
import {LoginRequest} from "../../model/login-request";
import {LoginResponse} from "../../model/login-response";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  loginForm! : FormGroup;
  private returnUrl! : string;

  constructor(private formBuilder : FormBuilder,
              private router : Router,
              private route : ActivatedRoute,
              private authenticationService : AuthenticationService) {
  }

  ngOnInit(): void {
    if (this.authenticationService.getCurrentUserValue) {
      this.router.navigate(["/home"]).then();
    }
    this.loginForm = this.formBuilder.group({
      username: ["", Validators.required],
      password: ["", Validators.required]
    });

    this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/home"
  }

  public onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    console.log(this.loginForm.value)
    const {username, password} = this.loginForm.value
    let loginRequest = new LoginRequest(username, password);
    console.log(loginRequest)

    this.authenticationService.login(loginRequest).subscribe((response : LoginResponse) => {
      this.router.navigate([this.returnUrl])
    });

  }

  logout() {
    this.authenticationService.logout()
    this.router.navigate(["/home"])
  }
}

