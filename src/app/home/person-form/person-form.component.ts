import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.sass']
})
export class PersonFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  personForm: FormGroup;

  ngOnInit() {
    this.personForm = this.formBuilder.group({});
  }

  /** Called when a new person has been entered and submitted */
  submitResult() {
    console.log(this.personForm.value);
  }

}
