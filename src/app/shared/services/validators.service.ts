import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
/**
 * This service validates inputs. I didn't add one for names to keep those fields flexible.
 */
export class ValidatorsService {

  constructor() { }

  /**
   * validates form controls that accept numerical characters only
   * @param control the form control containing the value to be validated
   */
  digitValidator(control: any) {
    if (!control.value) {
      return null;
    }
    if (control.value.match(/^[0-9]*$/)) {
      return null;
    } else {
      return {'digitsOnly': true};
    }
  }
}
