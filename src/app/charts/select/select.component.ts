import { Component, OnInit } from '@angular/core';
import { Input, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.sass']
})
export class SelectComponent implements OnInit, OnDestroy {

  constructor() { }

  @Input() options: [string];
  @Input() parentFormGroup: FormGroup;
  @Input() controlName: string;
  @Input() text: string;
  selectControl: FormControl = new FormControl('');
  show: boolean;

  ngOnInit() {
    this.parentFormGroup.addControl(this.controlName, this.selectControl);
    this.parentFormGroup.get(this.controlName).setValidators([Validators.required]);
  }

  /** When this component dismounts, it needs to be removed from the form */
  ngOnDestroy() {
    this.parentFormGroup.removeControl(this.controlName);
  }

}
