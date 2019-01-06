import { Component, OnInit } from '@angular/core';
import { Options } from 'src/app/shared/models/options';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.sass']
})
export class ChartsComponent implements OnInit {

  constructor() { }

  selectedOptions: Options;

  ngOnInit() { }

  /**
   * updates the currently selection options from the chart and data selects
   * @param options the selected options from the form
   */
  optionsSelected(options: Options): void {
    this.selectedOptions = options;
  }

}
