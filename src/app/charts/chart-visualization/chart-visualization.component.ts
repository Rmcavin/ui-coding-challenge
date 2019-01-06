import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';
import { Options } from '../../shared/models/options';
import { ChartsService } from '../../shared/services/charts.service';
import { FrequencyData } from '../../shared/models/frequencyData';
import * as d3 from 'd3';
import { Simulation, SimulationNodeDatum } from 'd3';

@Component({
  selector: 'app-chart-visualization',
  templateUrl: './chart-visualization.component.html',
  styleUrls: ['./chart-visualization.component.sass']
})
export class ChartVisualizationComponent implements OnInit, OnChanges {

  constructor() {}
  @Input() chartSelection: Options;
  @Input() chartData: FrequencyData[];
  svg: any;

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
      this.ScatterPlot(this.svg, this.chartData, this.chartSelection.dataSet);
    } else if (chartType === 'Frequency') {
      this.frequencyChart(this.svg, this.chartData);
    } else {
      this.bubbleChart(this.svg, this.chartData);
    }
  }

  /**
   * builds a bubble chart, similar to the frequency chart but uses circles
   * @param svg the target svg element - selected via d3.select
   * @param data the frequency data
   */
  bubbleChart(svg, data: FrequencyData[]): void {
    // I have made this chart before and mentioned it in the interview, I love the force simulation!
    // https://medium.freecodecamp.org/a-gentle-introduction-to-d3-how-to-build-a-reusable-bubble-chart-9106dc4f6c46
    const margin = {top: 20, right: 0, bottom: 30, left: 40},
    height = 500,
    width = 800,
    minRadius = 10,
    maxRadius = 20,
    columnForText = 'name',
    columnForRadius = 'frequency',
    forceApart = -50;

    svg.attr('width', width).attr('height', height);
    const svgContainer = d3.select('#chartContainer');

    const tooltip = svgContainer
      .append('div')
      .style('position', 'absolute')
      .style('visibility', 'hidden')
      .style('color', 'black')
      .style('padding', '8px')
      .style('border-radius', '6px')
      .style('text-align', 'center')
      .style('font-family', 'monospace')
      .style('width', '200px')
      .text('');


    const simulation = d3.forceSimulation(data as SimulationNodeDatum[])
      .force('charge', d3.forceManyBody().strength(-200))
      .force('x', d3.forceX())
      .force('y', d3.forceY())
      .on('tick', ticked);

      function ticked() {
      node.attr('cx', function(d) {
        return d.x;
      })
      .attr('cy', function(d) {
        return d.y;
      });
    }

    const scaleRadius = d3.scaleLinear()
        .domain([d3.min(data, function(d) {
          return +d[columnForRadius];
      }), d3.max(data, function(d) {
          return +d[columnForRadius];
      })]).range([minRadius, maxRadius]);

      const node = svg.selectAll('circle')
          .data(data)
          .enter()
          .append('circle')
          .attr('r', function(d) {
              return scaleRadius(d[columnForRadius]);
          })
          .attr('class', 'shape')
          .attr('transform', `translate(${[width / 2, height / 2]})`)
          .on('mouseover', (d) => {
            tooltip.html(`<p>${d[columnForText]}: ${d[columnForRadius]}</p>`);
            return tooltip.style('visibility', 'visible');
          })
          .on('mousemove', () => {
            return tooltip.style('top', `${d3.event.pageY - 5}px`).style('left', `${d3.event.pageX + 5}px`);
          })
           .on('mouseout', () => {
             return tooltip.style('visibility', 'hidden');
           });
         }

  /**
   * builds a frequency chart in an svg element
   * @param svg the target svg element - selected via d3.select
   * @param data the frequency data
   */
  frequencyChart(svg, data: FrequencyData[]): void {
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
      .attr('class', 'shape')
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
  }

  /**
   * creates a scatter plot, allowing data to be correlated
   * @param svg the target svg element - selected via d3.select
   * @param data the frequency data
   */
  ScatterPlot(svg, data: any[], dataType) {
    // based off of this example http://bl.ocks.org/bunkat/2595950
    const margin = {top: 20, right: 0, bottom: 30, left: 40},
    height = 500,
    width = 800;

    const labelMap = {
      'Age and Friends': ['Age', 'Friends'],
      'Age and Weight': ['Age', 'Weight'],
      'Weight and Friends': ['Weight', 'Friends']
    };
    const labels = labelMap[dataType];

    const svgContainer = d3.select('#chartContainer');

    const tooltip = svgContainer
      .append('div')
      .style('position', 'absolute')
      .style('visibility', 'hidden')
      .style('color', 'black')
      .style('padding', '8px')
      .style('border-radius', '6px')
      .style('text-align', 'center')
      .style('font-family', 'monospace')
      .style('width', '200px')
      .text('');

    const x = d3.scaleLinear()
      .domain([0, d3.max(data, d => d[0])]).nice()
      .range([margin.left, width - margin.right]);

    const y = d3.scaleLinear()
      .domain([0, d3.max(data, d => d[1])]).nice()
      .range([height - margin.bottom, margin.top]);

    const xAxis = g => g
      .attr('transform', `translate(0,${height - margin.top})`)
      .call(d3.axisBottom(x)
      .tickSizeOuter(0));

    const yAxis = g => g
      .attr('transform', `translate(${margin.left},0)`)
      .call(d3.axisLeft(y))
      .call(g2 => g2.select('.domain').remove());

    const main = svg.append('g')
      .attr('transform', `translate(0, 0)`)
      .attr('width', width)
      .attr('height', height)
      .attr('class', 'main');

    main.append('g')
      .selectAll('circle')
      .data(data).enter()
      .append('circle')
        .attr('class', 'shape')
        .attr('cx', (d) => x(d[0]))
        .attr('cy', (d) => y(d[1]))
        .attr('r', 10)
        .on('mouseover', (d) => {
          tooltip.html(`<p>${labels[0]}: ${d[0]}, ${labels[1]}: ${d[1]}</p>`);
          return tooltip.style('visibility', 'visible');
        })
        .on('mousemove', () => {
          return tooltip.style('top', `${d3.event.pageY - 5}px`).style('left', `${d3.event.pageX + 5}px`);
        })
         .on('mouseout', () => {
           return tooltip.style('visibility', 'hidden');
         });

    main.append('g')
      .call(xAxis);

    main.append('g')
      .call(yAxis);
  }
}
