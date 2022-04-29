import {Component, Injectable, OnInit} from '@angular/core';
import {Weather} from "../model/Weather";
import {ComparisonService} from "./service/comparison.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-comparison',
  templateUrl: './comparison.component.html',
  styleUrls: ['./comparison.component.scss']
})

@Injectable({
  providedIn: 'root'
})
export class ComparisonComponent implements OnInit {
  // TODO: Change dynamic style
  public comparisonList : Weather[] = []

  constructor(private service: ComparisonService, private router: Router) {}

  ngOnInit(): void {
    this.comparisonList = this.service.comparisonList
  }

  compare() {
    this.router.navigateByUrl('/comparing')
  }

  addToList(weather: Weather) {
    this.service.addToList(weather)
  }

  removeFromList(weather: Weather) {
    this.service.removeFromList(weather)
  }

}
