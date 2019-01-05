import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Input } from '@angular/core';
import { Validators } from '@angular/forms';
import { ValidatorsService } from '../../shared/services/validators.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.sass']
})
export class InputComponent implements OnInit, OnDestroy {

  constructor(private validatorsService: ValidatorsService) { }

  @Input() parentFormGroup: FormGroup;
  @Input() controlName: string;
  @Input() text: string;
  @Input() type = 'text';
  @Input() placeholder?: string;
  @Input() validator?: string;
  inputControl: FormControl = new FormControl('');

  /** Attach the control to the form, add the correct validators (required is default) */
  ngOnInit() {
    const activeValidators = this.validator ? [Validators.required, this.validatorsService[this.validator]] : [Validators.required];
    this.parentFormGroup.addControl(this.controlName, this.inputControl);
    this.parentFormGroup.get(this.controlName).setValidators(activeValidators);
  }

  /** When this component dismounts, it needs to be removed from the form */
  ngOnDestroy() {
    this.parentFormGroup.removeControl(this.controlName);
  }

}
