import { Component, OnInit, Input } from '@angular/core';
import { Options } from '../../shared/models/options';

@Component({
  selector: 'app-chart-visualization',
  templateUrl: './chart-visualization.component.html',
  styleUrls: ['./chart-visualization.component.sass']
})
export class ChartVisualizationComponent implements OnInit {

  constructor() { }

  @Input() chartSelection: Options;

  ngOnInit() {
  }

}
