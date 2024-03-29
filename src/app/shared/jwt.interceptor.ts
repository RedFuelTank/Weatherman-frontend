import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {AuthenticationService} from "../authentication/service/authentication.service";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private authenticationService : AuthenticationService) {}
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let currentUser = this.authenticationService.getCurrentUserValue;
    console.log(request)

    if (currentUser && currentUser.token) {
      request = request.clone({
        setHeaders: {
          Authorization: "Bearer " + currentUser.token
        }
      });
    }

    return next.handle(request);
  }
}

