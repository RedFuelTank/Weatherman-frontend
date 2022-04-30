import {Component, OnInit, Input} from '@angular/core';
import {WeatherService} from "./service/weather.service";
import {ComparisonComponent} from "../comparison/comparison.component";
import {Weather} from "../model/Weather";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  public weathers!: Weather[];

  constructor(private service: WeatherService, public comparison: ComparisonComponent) { }

  ngOnInit(): void {
    this.loadDefaultWeathers()
  }

  public loadDefaultWeathers() {
    console.log(1)
    this.weathers = [];
    this.service.getWeathers(59.436962,24.753574).subscribe(weather => this.weathers = weather)
  }

  public loadWeathers(lat: Number, lon: Number) {
    console.log('start')
    console.log(lat)
    console.log(lon)
    this.service.getWeathers(lat,lon).subscribe(weather => this.weathers = weather)
  }

}
