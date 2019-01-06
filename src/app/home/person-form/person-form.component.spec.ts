import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PersonFormComponent } from './person-form.component';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from '../input/input.component';
import { HomeComponent } from '../home.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material';
import { DataTableComponent } from '../data-table/data-table.component';

describe('PersonFormComponent', () => {
  let component: PersonFormComponent;
  let fixture: ComponentFixture<PersonFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PersonFormComponent,
        HomeComponent,
        InputComponent,
        DataTableComponent
      ],
      imports: [
        FormsModule,
        BrowserAnimationsModule,
        MatInputModule,
        MatCardModule,
        FormsModule,
        ReactiveFormsModule,
        MatTableModule
      ],
      providers: [
        FormBuilder
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
