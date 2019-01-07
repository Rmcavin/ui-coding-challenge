import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Input } from '@angular/core';
import { ValidatorFn } from '@angular/forms';

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
  @Input() type: string;
  @Input() maxLength: number;
  inputControl: FormControl;

  /** Attach the control to the form, add the correct validators (required is default) */
  ngOnInit() {
    if (this.type === 'text') {
      this.inputControl = new FormControl(null, [Validators.required, Validators.maxLength(this.maxLength)]);
    } else {
      this.inputControl = new FormControl(null, [Validators.required, Validators.max(999), Validators.min(0)]);
    }
    this.parentFormGroup.addControl(this.controlName, this.inputControl);

  }

  /** When this component dismounts, it needs to be removed from the form */
  ngOnDestroy() {
    this.parentFormGroup.removeControl(this.controlName);
  }
}
