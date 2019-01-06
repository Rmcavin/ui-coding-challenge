import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ChartsComponent } from './charts.component';
import { ChartOptionsComponent } from './chart-options/chart-options.component';
import { ChartVisualizationComponent } from './chart-visualization/chart-visualization.component';
import { MatCardModule, MatSelectModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { SelectComponent } from './select/select.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ChartsComponent', () => {
  let component: ChartsComponent;
  let fixture: ComponentFixture<ChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ChartsComponent,
        ChartOptionsComponent,
        ChartVisualizationComponent,
        SelectComponent
      ],
      imports: [
        BrowserAnimationsModule,
        MatCardModule,
        FormsModule,
        ReactiveFormsModule,
        MatSelectModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
