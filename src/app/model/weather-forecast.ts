import {Weather} from "./Weather";

export class WeatherForecast {
  weathers!: Weather[];

  constructor(weathers: Weather[]) {
    this.weathers = weathers;
  }
}
