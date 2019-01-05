import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Input } from '@angular/core';
import { Validators } from '@angular/forms';

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
  @Input() placeholder?: string;
  // @Input() validator: string;
  inputControl: FormControl = new FormControl('', [Validators.required]);

  ngOnInit() {
    console.log(this.controlName);
    this.parentFormGroup.addControl(this.controlName, this.inputControl);
    // TODO: add validation
    console.log(this.parentFormGroup);
  }

  /** When this component dismounts, it needs to be removed from the form */
  ngOnDestroy() {
    this.parentFormGroup.removeControl(this.controlName);
  }

}
