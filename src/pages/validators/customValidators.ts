import { AbstractControl, ValidatorFn } from '@angular/forms';

export function checkFirstCharacterValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    const valid = /^\d/.test(control.value);
	return (valid) ? {checkFirstCharacterValidatorOutput: true} : null;
  };
}
