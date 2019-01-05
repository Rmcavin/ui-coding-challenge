import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.sass']
})
export class InputComponent implements OnInit {

  constructor() { }

  @Input() parentFormGroup: FormGroup;
  @Input() controlName: string;
  @Input() text: string;
  @Input() placeholder?: string;
  // @Input() validator: string;
  inputControl: FormControl = new FormControl('');

  ngOnInit() {
    this.parentFormGroup.addControl(this.controlName, this.inputControl);
    // TODO: add validation
  }

}
