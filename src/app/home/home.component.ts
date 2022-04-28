import { Component, OnInit } from '@angular/core';
import { Weather} from "../model/Weather";
import {WeatherService} from "../weather/weather.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public weathers!: Weather[];

  constructor(private service: WeatherService) { }

  ngOnInit(): void {
    this.loadWeathers()
  }

  public loadWeathers() {
    this.weathers = [];
    this.service.getWeathers().subscribe(weather => this.weathers = weather)
    console.log('home')
  }

}
