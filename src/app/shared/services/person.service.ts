import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { People } from '../models/People';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor() { }

  private personList = new Subject<People>();

}
