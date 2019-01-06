import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-chart-options',
  templateUrl: './chart-options.component.html',
  styleUrls: ['./chart-options.component.sass']
})
export class ChartOptionsComponent implements OnInit, OnDestroy {

  constructor(private formBuilder: FormBuilder) { }

  @Output() submission = new EventEmitter();
  optionsForm: FormGroup;
  chartOptions = ['Frequency', 'Bubble', 'Scatter'];
  frequencyOptions = ['First Name', 'Last Name', 'Age', 'Friends', 'Width']; // for both frequency and bubble
  scatterOptions = ['Age and Friends', 'Age and Weight', 'Weight and Friends'];
  activeOptions: string[];
  formChanges;

  ngOnInit() {
    this.optionsForm = this.formBuilder.group({});
    this.getUpdates();
  }

  /** Subscribes to changes in the form, enables updating the second select off of the first response */
  getUpdates(): void {
    this.formChanges = this.optionsForm.valueChanges.subscribe(change => {
      if (change.hasOwnProperty('chartType') && change.chartType) {
        const chartType = change.chartType;
        this.changeChartType(chartType);
      }
    });
  }

  /**
   * This changes the active options, which are the choices in the 2nd select. They depend on the first response.
   * @param type the selected chart type
   */
  changeChartType(type: string): void {
   if (type === 'Frequency' || type === 'Bubble') {
     this.activeOptions = this.frequencyOptions;
   } else {
     this.activeOptions = this.scatterOptions;
   }
  }

  /** Emits the form value to the parent chart component */
  submitResult(): void {
    this.submission.emit(this.optionsForm.value);
  }

  /** unsubscribes from form updates */
  ngOnDestroy() {
    this.formChanges.unsubscribe();
  }
}
