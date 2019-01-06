import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ChartOptionsComponent } from './chart-options.component';
import { MatCardModule, MatButtonModule, MatSelectModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ChartsComponent } from '../charts.component';
import { SelectComponent } from '../select/select.component';
import { ChartVisualizationComponent } from '../chart-visualization/chart-visualization.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ChartOptionsComponent', () => {
  let component: ChartOptionsComponent;
  let fixture: ComponentFixture<ChartOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ChartOptionsComponent,
        ChartsComponent,
        SelectComponent,
        ChartVisualizationComponent
      ],
      imports: [
        BrowserAnimationsModule,
        MatCardModule,
        MatButtonModule,
        MatSelectModule,
        FormsModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
