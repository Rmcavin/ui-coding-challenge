import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartVisualizationComponent } from './chart-visualization.component';

describe('ChartVisualizationComponent', () => {
  let component: ChartVisualizationComponent;
  let fixture: ComponentFixture<ChartVisualizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartVisualizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartVisualizationComponent);
    component = fixture.componentInstance;
    component.chartSelection = {chartType: 'Frequency', dataSet: 'First Name'};
    component.chartData = [{name: 'Rachel', frequency: 10}, {name: 'Test', frequency: 5}]
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
