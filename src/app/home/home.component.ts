import { Component, OnInit } from '@angular/core';
import { PersonService } from '../shared/services/person.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor(private personService: PersonService) { }

  ngOnInit() {
    this.personService.getPeople().subscribe(people => {
      console.log(people);
    });

    this.personService.addPeople({
      firstName: 'Rachel',
      lastName: 'Cavin',
      friends: 3,
      age: 27,
      weight: 180});

    this.personService.addPeople({
      firstName: 'Testing',
      lastName: 'Test',
      friends: 2,
      age: 27,
      weight: 180});
  }
}
