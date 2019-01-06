import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.sass']
})
export class InputComponent implements OnInit, OnDestroy {

  constructor() { }

  @Input() parentFormGroup: FormGroup;
  @Input() controlName: string;
  @Input() text: string;
  @Input() type = 'text';
  inputControl: FormControl = new FormControl('');

  /** Attach the control to the form, add the correct validators (required is default) */
  ngOnInit() {
    this.parentFormGroup.addControl(this.controlName, this.inputControl);
    this.parentFormGroup.get(this.controlName).setValidators(Validators.required);
  }

  /** When this component dismounts, it needs to be removed from the form */
  ngOnDestroy() {
    this.parentFormGroup.removeControl(this.controlName);
  }

}
