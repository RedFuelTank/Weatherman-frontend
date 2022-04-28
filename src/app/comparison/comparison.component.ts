import {Component, Injectable, OnInit} from '@angular/core';
import {Weather} from "../model/Weather";
import {ComparisonService} from "./service/comparison.service";

@Component({
  selector: 'app-comparison',
  templateUrl: './comparison.component.html',
  styleUrls: ['./comparison.component.scss']
})

@Injectable({
  providedIn: 'root'
})
export class ComparisonComponent implements OnInit {
  public comparisonList : Weather[] = []

  constructor(private service: ComparisonService) { }

  ngOnInit(): void {
    this.comparisonList = this.service.comparisonList
  }

  addToList(weather: Weather) {
    this.service.addToList(weather)
  }

  removeFromList(weather: Weather) {
    this.service.removeFromList(weather)
  }
}
