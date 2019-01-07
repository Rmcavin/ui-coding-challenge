import { Injectable } from '@angular/core';
import { Options } from '../models/options';
import { People } from '../models/People';
import * as d3 from 'd3';
import { FrequencyData } from '../models/frequencyData';

@Injectable({
  providedIn: 'root'
})
export class ChartsService {

  constructor() { }

  dataMap = {
    'First Name': ['firstName'],
    'Last Name': ['lastName'],
    'Age': ['age'],
    'Friends': ['friends'],
    'Weight': ['weight'],
    'Age and Friends': ['age', 'friends'],
    'Age and Weight': ['age', 'weight'],
    'Weight and Friends': ['weight', 'friends']
  };

  /**
   * Prepares data for scatter plots, [[x,y], ...]
   * @param selection the selected data
   * @param data the unfiltered data
   */
  scatterPlotPrep(selection: Options, data: People[]) {
    console.log('selection', selection, 'data', data);
    const dataField = this.dataMap[selection.dataSet];
    const filteredData = this.filterData(dataField, data);
    const preparedData = [];
    for (const elem of filteredData) {
      preparedData.push([elem[dataField[0]], elem[dataField[1]]]);
    }
    return preparedData;
  }

  /**
   * calculates frequencies/counts for entered data to display in frequency and bubble charts - not for use in scatterplots
   * @param selection the selected data
   * @param data the unfiltered data
   */
  calculateFrequency(selection: Options, data: People[]): FrequencyData[] {
    const dataField = this.dataMap[selection.dataSet];
    const preparedData = this.filterData(dataField, data);
    const frequencies = {};
    // prepares an object of frequencies for quick lookup
    preparedData.map(person => {
      const prop = person[dataField[0]];
      if (frequencies.hasOwnProperty(prop)) {
        frequencies[prop] ++;
      } else {
        frequencies[prop] = 1;
      }
    });
    // transforms object to array formatted for d3
    const freqArr: FrequencyData[] = [];
    Object.entries(frequencies).forEach(([key, value]: [string, number]) => {
      freqArr.push({name: key, frequency: value});
    });
    return freqArr;
  }

  /**
   * filters the data to prepare it for calculations
   * NOTE: I am not super happy with this function as it has nested loops,
   * however the inner loop will only ever be 1-2 elements long. This is definitely
   * something I would try to rewrite if I had more time
   * @param selection the selected data
   * @param data the unfiltered data
   */
  filterData(keys: string[], data: People[]) {
    return data.map((person => {
      const filtered = {};
      keys.forEach(key => {
        filtered[key] = person[key];
      });
      return filtered;
    }));
  }

}
