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
    const selection = [
      {chartType: 'Scatter', dataSet: 'Age and Friends'}
    ];
    const data = [
      [{firstName: 'Rachel', lastName: 'Cavin', friends: 15, age: 27, weight: 160}]
    ];

    for (const i = 0; i < data.length; i++) {
      const result = service.scatterPlotPrep(selection[i], data[i]);
      expect(result).toEqual([[27, 15]]);
    }
  });

  it('should calculate frequency data', () => {
    const service: ChartsService = TestBed.get(ChartsService);
  });

  it('should filter data for what is to be included in the chart', () => {
    const service: ChartsService = TestBed.get(ChartsService);
  });
});
