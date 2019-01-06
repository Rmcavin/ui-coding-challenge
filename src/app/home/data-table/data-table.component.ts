import { Component, OnInit } from '@angular/core';
import { People } from '../../shared/models/People';
import { PersonService } from '../../shared/services/person.service';
import {MatTable, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.sass']
})
export class DataTableComponent implements OnInit {

  constructor(private personService: PersonService) { }

  dataSource = new MatTableDataSource<People>();
  displayedColumns: string[] = ['firstName', 'lastName', 'friends', 'age', 'weight'];

  ngOnInit() {
    this.personService.getPeople().subscribe(people => {
      this.dataSource.data = people;
    });
  }


}
