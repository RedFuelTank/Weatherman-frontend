import { Component, OnInit } from '@angular/core';
import {ComparisonService} from "../comparison/service/comparison.service";
import {WeatherForecast} from "../model/weather-forecast";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  weatherForecasts: WeatherForecast[] = [];

  constructor(private service: ComparisonService) { }

  ngOnInit(): void {
  }

  loadSavedForecasts() {
    this.service.getWeatherForecasts().subscribe(weather => this.weatherForecasts = weather)
  }
}
