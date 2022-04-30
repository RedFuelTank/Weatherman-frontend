import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {ProfileComponent} from './profile/profile.component';
import {HttpClientModule} from "@angular/common/http";
import {ComparisonComponent} from './comparison/comparison.component';
import {ComparisonTableComponent} from './comparison/comparison-table/comparison-table.component';
import {GoogleMapsModule} from "@angular/google-maps";
import {MapComponent} from "./map/map.component";
import { WeatherComponent } from './weather/weather.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    ComparisonComponent,
    ComparisonTableComponent,
    MapComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
