import { Component, OnInit } from '@angular/core';
import { Weather} from "../model/Weather";
import {WeatherService} from "../weather/weather.service";
import {ComparisonComponent} from "../comparison/comparison.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public weathers!: Weather[];

  constructor(private service: WeatherService, public comparison: ComparisonComponent) { }

  ngOnInit(): void {
    this.loadWeathers()
  }

  public loadWeathers() {
    this.weathers = [];
    this.service.getWeathers(59.436962,24.753574).subscribe(weather => this.weathers = weather)
  }
}
