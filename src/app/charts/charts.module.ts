import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsComponent } from './charts.component';
import { ChartsRoutingModule } from './charts-routing.module';
import { RouterModule } from '@angular/router';
import { ChartOptionsComponent } from './chart-options/chart-options.component';
import { MatCardModule, MatButtonModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { SelectComponent } from './select/select.component';
import { ChartVisualizationComponent } from './chart-visualization/chart-visualization.component';

@NgModule({
  declarations: [
    ChartsComponent,
    ChartOptionsComponent,
    SelectComponent,
    ChartVisualizationComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ChartsRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    FormBuilder
  ]
})
export class ChartsModule { }
