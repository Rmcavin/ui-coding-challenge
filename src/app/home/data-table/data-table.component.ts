import { Component, OnInit, OnDestroy } from '@angular/core';
import { People } from '../../shared/models/People';
import { PersonService } from '../../shared/services/person.service';
import {MatTable, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.sass']
})
export class DataTableComponent implements OnInit, OnDestroy {

  constructor(private personService: PersonService) { }

  dataSource = new MatTableDataSource<People>();
  subscription;
  displayedColumns: string[] = ['firstName', 'lastName', 'friends', 'age', 'weight'];

  ngOnInit() {
    this.getPeople();
  }

  /** Subscribes to the people list subject */
  getPeople() {
    this.subscription = this.personService.getPeople().subscribe(people => {
      this.dataSource.data = people;
    });
  }

  /** Empties the array in the subject, called on button click */
  clear() {
    this.personService.clearPeople();
  }

  /** removes subscription before destroying */
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
