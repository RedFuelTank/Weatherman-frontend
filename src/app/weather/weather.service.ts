import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Weather} from "../model/Weather";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  public static REST_API_PATH = '/api'

  constructor(private http: HttpClient) { }

  getWeathers(lat: Number, lon: Number) {
    return this.http.get<Weather[]>(WeatherService.REST_API_PATH + '/weather' + `?lat=${lat}&lon=${lon}`)
  }
}
