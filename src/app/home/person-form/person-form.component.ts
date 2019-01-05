import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PersonService } from '../../shared/services/person.service';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.sass']
})
export class PersonFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private personService: PersonService) { }

  personForm: FormGroup;

  ngOnInit() {
    this.personForm = this.formBuilder.group({});
  }

  /** Called when a new person has been entered and submitted */
  submitResult(): void {
    this.personService.addPeople(this.personForm.value);
    this.personForm.reset();
  }

}
