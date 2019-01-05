import { Component, OnInit } from '@angular/core';
import { People } from '../../shared/models/People';
import { PersonService } from '../../shared/services/person.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.sass']
})
export class DataTableComponent implements OnInit {

  constructor(private personService: PersonService) { }

  peopleData: [People];

  ngOnInit() {
    this.personService.getPeople().subscribe(people => {
      this.peopleData = people;
      console.log('people in data table', people);
    });
  }

}
