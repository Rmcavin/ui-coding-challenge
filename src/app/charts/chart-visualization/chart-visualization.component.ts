import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';
import { Options } from '../../shared/models/options';
import { ChartsService } from '../../shared/services/charts.service';
import { People } from '../../shared/models/People';
import { PersonService } from '../../shared/services/person.service';

@Component({
  selector: 'app-chart-visualization',
  templateUrl: './chart-visualization.component.html',
  styleUrls: ['./chart-visualization.component.sass']
})
export class ChartVisualizationComponent implements OnInit, OnChanges {

  constructor(private chartService: ChartsService, private personService: PersonService) { }

  @Input() chartSelection: Options;
  chartData: [People];
  dataSubscription;

  ngOnInit() {
    this.getData();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.hasOwnProperty('chartSelection') && changes.chartSelection.currentValue) {
      // stuff
    }
  }

  /** Subscribes to the data that will be visualized */
  getData() {
    this.dataSubscription = this.personService.getPeople().subscribe(people => {
      console.log(people);
      this.chartData = people;
    });
  }

  /** Unsubscribes to the subject subscription */
  OnDestroy() {
    this.dataSubscription.unsubscribe();
  }

}
