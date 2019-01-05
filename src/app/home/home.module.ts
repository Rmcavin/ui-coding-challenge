import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { RouterModule } from '@angular/router';
import { PersonFormComponent } from './person-form/person-form.component';
import { InputComponent } from './input/input.component';
import { FormBuilder } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    HomeComponent,
    PersonFormComponent,
    InputComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HomeRoutingModule,
    MatInputModule,
    MatCardModule
  ],
  providers: [
    FormBuilder
  ]
})
export class HomeModule { }
