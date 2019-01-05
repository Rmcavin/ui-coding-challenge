import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { People } from '../models/People';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor() { }

  private personList = new BehaviorSubject([]);

  /** Accesses the current value of the personList */
  private getValue() {
    return this.personList.value;
  }

  /** Allows subscribes to receive updates when the personList changes */
  getPeople() {
    return this.personList.asObservable();
  }

  /**
   * Adds a new person to the list
   * @param person the person object to be added
   */
  addPeople(person: People) {
    const currentList = this.getValue();
    currentList.push(person);
    this.personList.next(currentList);
  }
}
