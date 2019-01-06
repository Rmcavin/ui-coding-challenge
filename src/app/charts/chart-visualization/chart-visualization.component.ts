import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';
import { Options } from '../../shared/models/options';
import { ChartsService } from '../../shared/services/charts.service';
import { FrequencyData } from '../../shared/models/frequencyData';
import * as d3 from 'd3';

@Component({
  selector: 'app-chart-visualization',
  templateUrl: './chart-visualization.component.html',
  styleUrls: ['./chart-visualization.component.sass']
})
export class ChartVisualizationComponent implements OnInit, OnChanges {

  constructor() {}
  @Input() chartSelection: Options;
  @Input() chartData: FrequencyData[];

  width: number;
  height: number;
  margin = {top: 20, right: 20, bottom: 30, left: 40};
  x: any;
  y: any;
  svg: any;
  g: any;

  ngOnInit() {
    this.visualize(this.chartSelection.chartType);
  }

  /**
   * resets and re-renders the chart when relevant changes occur
   * @param changes input binding changes from parent
   */
  ngOnChanges(changes: SimpleChanges) {
    if (changes.hasOwnProperty('chartSelection') && changes.chartSelection.currentValue) {
      d3.selectAll('svg > *').remove();
      this.visualize(changes.chartSelection.currentValue.chartType);
    }
  }

  /** prepares the data for visualization
   * @param chartType the selected type of chart
  */
  visualize(chartType: string) {
    this.svg = d3.select('svg');
    if (chartType === 'Scatter') {
      // scatter plot render
    } else if (chartType === 'Frequency') {
      this.frequencyChart(this.svg, this.chartData);
    } else {
      // bubble chart render
    }
  }

  /**
   * builds a frequency chart in an svg element
   * @param svg the target svg element - selected via d3.select
   * @param data the frequency data
   */
  frequencyChart(svg, data: FrequencyData[]) {
    // based off of this example: https://beta.observablehq.com/@mbostock/d3-bar-chart
    const margin = {top: 20, right: 0, bottom: 30, left: 40};
    const height = 500;
    const width = 800;
    // set up x and y values
    const x = d3.scaleBand()
      .domain(data.map(d => d.name))
      .range([margin.left, width - margin.right])
      .padding(0.1);

    const y = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.frequency)]).nice()
      .range([height - margin.bottom, margin.top]);
    // set up x and y axis
    const xAxis = g => g
      .attr('transform', `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(x)
        .tickSizeOuter(0));

    const yAxis = g => g
      .attr('transform', `translate(${margin.left},0)`)
      .call(d3.axisLeft(y))
      .call(g2 => g2.select('.domain').remove());

    svg.append('g')
      // selects all rectangles, enters the data and appends new rectangles
      .selectAll('rect').data(data).enter().append('rect')
      // the fill and hover comes from this class
      .attr('class', 'bar')
        // the x axis gets the data's name
        .attr('x', d => x(d.name))
        // the y axis gets the data's frequency/value
        .attr('y', d => y(d.frequency))
        // the height of the bar is determined by the y value
        .attr('height', d => y(0) - y(d.frequency))
        // the width is calculated via bandwidth
        .attr('width', d => x.bandwidth());

    svg.append('g')
      .call(xAxis);

    svg.append('g')
      .call(yAxis);
    return svg.node();
  }
}
