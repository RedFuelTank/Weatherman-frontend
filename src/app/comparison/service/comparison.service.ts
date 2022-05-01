import { Injectable } from '@angular/core';
import {Weather} from "../../model/Weather";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {WeatherForecast} from "../../model/weather-forecast";

@Injectable({
  providedIn: 'root'
})
export class ComparisonService {
  public comparisonList : Weather[] = []
  private static REST_API_SERVER = "/api";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  addToList(weather: Weather) {
    if (!this.comparisonList.includes(weather)) {
      this.comparisonList.push(weather)
    }
    console.log(this.comparisonList)
  }

  removeFromList(weather: Weather) {
    this.comparisonList = this.comparisonList.filter(element => element != weather)
  }

  saveToDB() {
    console.log("added")
    let data = JSON.stringify({series: this.comparisonList})
    this.http.post<any>(ComparisonService.REST_API_SERVER + "/comparison", data, this.httpOptions).subscribe()
  }

  getWeatherForecasts() {
    return this.http.get<WeatherForecast[]>(ComparisonService.REST_API_SERVER + "/comparison")
  }
}
