import { Component, OnInit } from '@angular/core';
import {ComparisonService} from "../service/comparison.service";

@Component({
  selector: 'app-comparison-table',
  templateUrl: './comparison-table.component.html',
  styleUrls: ['./comparison-table.component.scss']
})
export class ComparisonTableComponent implements OnInit {

  constructor(public service: ComparisonService) { }

  ngOnInit(): void {
  }

  save() {
    this.service.saveToDB();
  }

}
