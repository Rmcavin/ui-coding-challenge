import { Component, OnInit, Input, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.sass']
})
export class SelectComponent implements OnInit, OnChanges, OnDestroy {

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

  ngOnChanges(changes: SimpleChanges) {
    if (changes.hasOwnProperty('options')) {
      this.selectControl.reset();
    }
  }

  /** When this component dismounts, it needs to be removed from the form */
  ngOnDestroy() {
    this.parentFormGroup.removeControl(this.controlName);
  }

}
