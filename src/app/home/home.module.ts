import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { RouterModule } from '@angular/router';
import { PersonFormComponent } from './person-form/person-form.component';
import { InputComponent } from './input/input.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { DataTableComponent } from './data-table/data-table.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    HomeComponent,
    PersonFormComponent,
    InputComponent,
    DataTableComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HomeRoutingModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatTableModule
  ],
  providers: [
    FormBuilder
  ]
})
export class HomeModule { }
