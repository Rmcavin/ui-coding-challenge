import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectComponent } from './select.component';
import { MatSelectModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('SelectComponent', () => {
  let component: SelectComponent;
  let fixture: ComponentFixture<SelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SelectComponent
      ],
      imports: [
        BrowserAnimationsModule,
        MatSelectModule,
        FormsModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectComponent);
    component = fixture.componentInstance;
    const formBuilder: FormBuilder = new FormBuilder();
    component.parentFormGroup = formBuilder.group({});
    component.options = ['Frequency', 'Bubble', 'Scatter'];
    component.controlName = 'ChartType';
    component.text = '1. Select a Chart Type.';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
