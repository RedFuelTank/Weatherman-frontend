import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {ProfileComponent} from './profile/profile.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ComparisonComponent} from './comparison/comparison.component';
import {ComparisonTableComponent} from './comparison/comparison-table/comparison-table.component';
import {GoogleMapsModule} from "@angular/google-maps";
import {MapComponent} from "./map/map.component";
import { WeatherComponent } from './weather/weather.component';
import { RegistrationFormComponent } from './authentication/registration-form/registration-form.component';
import { LoginFormComponent } from './authentication/login-form/login-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {JwtInterceptor} from "./shared/jwt.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    ComparisonComponent,
    ComparisonTableComponent,
    MapComponent,
    WeatherComponent,
    RegistrationFormComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GoogleMapsModule,
    ReactiveFormsModule
  ],
  providers: [HttpClientModule,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
