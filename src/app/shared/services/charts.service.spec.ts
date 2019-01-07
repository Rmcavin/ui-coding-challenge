import { TestBed } from '@angular/core/testing';
import { ChartsService } from './charts.service';

describe('ChartsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChartsService = TestBed.get(ChartsService);
    expect(service).toBeTruthy();
  });

  it('should format data for scatter plots', () => {
    const service: ChartsService = TestBed.get(ChartsService);
    // possible selections
    const selection = [
      {chartType: 'Scatter', dataSet: 'Age and Friends'},
      {chartType: 'Scatter', dataSet: 'Age and Weight'},
      {chartType: 'Scatter', dataSet: 'Weight and Friends'}
    ];
    // data examples
    const data = [
      [{firstName: 'Rachel', lastName: 'Cavin', friends: 15, age: 27, weight: 160}],
      [{firstName: 'Rachel', lastName: 'Cavin', friends: 0, age: 0, weight: 0}],
      [{firstName: 'Rachel', lastName: 'Cavin', friends: -1, age: -100, weight: -21},
      {firstName: 'Test', lastName: 'Test', friends: 25, age: 1000, weight: 46},
      {firstName: 'Rachel', lastName: 'Cavin', friends: 0, age: 0, weight: 0}]
    ];
    // expected outputs
    const expected = [
      [[27, 15]],
      [[0, 0]],
      [[-21, -1], [46, 25], [0, 0]]
    ];
    // test factory
    for (let i = 0; i < data.length; i++) {
      const result = service.scatterPlotPrep(selection[i], data[i]);
      console.log(result);
      console.log(expected[i]);
      expect(result).toEqual(expected[i]);
    }
  });

  it('should calculate frequency data', () => {
    const service: ChartsService = TestBed.get(ChartsService);
  });

  it('should filter data for what is to be included in the chart', () => {
    const service: ChartsService = TestBed.get(ChartsService);
  });
});
