import { Component, OnInit } from '@angular/core';
import { Options } from 'src/app/shared/models/options';
import { PersonService } from '../shared/services/person.service';
import { ChartsService } from '../shared/services/charts.service';
import { People } from '../shared/models/People';
import { FrequencyData } from '../shared/models/frequencyData';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.sass']
})
export class ChartsComponent implements OnInit {

  constructor(private personService: PersonService, private chartService: ChartsService) { }

  selectedOptions: Options;
  initialData: People[];
  chartData: FrequencyData[]; // | ScatterData[]
  dataSubscription;

  ngOnInit() {
    this.getData();
  }

  /**
   * updates the currently selection options from the chart and data selects
   * @param options the selected options from the form
   */
  optionsSelected(options: Options): void {
    this.selectedOptions = options;
    if (this.selectedOptions.chartType === 'Scatter') {
      // const data = this.chartService.scatterPlotPrep(this.chartSelection, this.chartData);
      // console.log(data);
    } else if (this.selectedOptions.chartType === 'Frequency') {
      this.chartData = this.chartService.calculateFrequency(this.selectedOptions, this.initialData);
    } else {
      // bubble
    }
  }

  /** Subscribes to the data that will be visualized */
  getData() {
    this.dataSubscription = this.personService.getPeople().subscribe(people => {
      this.initialData = people;
    });
  }

}
