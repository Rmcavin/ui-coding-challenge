import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { People } from '../models/People';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor() { }

  private personList = new BehaviorSubject<[People]>(null);

  /** Accesses the current value of the personList */
  private getValue() {
    return this.personList.value;
  }

  /** Allows subscribes to receive updates when the personList changes */
  getPeople() {
    return this.personList.asObservable();
  }

  /**
   * Adds a new person to the list, if the list hasn't been started it creates it
   * Modifies the typing as needed to convert the string output of the forms
   * @param person the person object to be added
   */
  addPeople(person: People) {
    const typedPerson = {
      ...person,
      friends: Number(person.friends),
      weight: Number(person.weight),
      age: Number(person.age)
    };
    const currentList = this.getValue();
    if (Array.isArray(currentList)) {
      currentList.push(typedPerson);
      this.personList.next(currentList);
    } else {
      this.personList.next([typedPerson]);
    }
  }
}
