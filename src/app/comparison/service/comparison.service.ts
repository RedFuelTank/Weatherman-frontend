import { Injectable } from '@angular/core';
import {Weather} from "../../model/Weather";

@Injectable({
  providedIn: 'root'
})
export class ComparisonService {
  public comparisonList : Weather[] = []

  constructor() { }

  addToList(weather: Weather) {
    if (!this.comparisonList.includes(weather)) {
      this.comparisonList.push(weather)
    }
    console.log(this.comparisonList)
  }

  removeFromList(weather: Weather) {
    this.comparisonList = this.comparisonList.filter(element => element != weather)
  }
}
