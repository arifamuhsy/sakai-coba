import { FormGroup, FormArray } from "@angular/forms";

export function isFieldInvalid(form: FormGroup, field: string | Array<string>): boolean {
  const fieldControl = form.get(field);
  return fieldControl.invalid && (fieldControl.dirty || fieldControl.touched);
}

export function isFieldInvalidPengurus(form: FormGroup, formArrayIndex: number, field: string | Array<string>) {
  const pengurusControls = <FormArray>form.controls['pengurusList'];
  const control = pengurusControls.at(formArrayIndex);
  return control.get(field).invalid && (control.get(field).touched || control.get(field).dirty);
}

export function isSpanHiddenFor(form: FormGroup, field: string | Array<string>): boolean {
  const fieldControl = form.get(field);
  return fieldControl.valid || fieldControl.pristine;
}

export function isSpanHiddenForNpwpPengurus(form: FormGroup, formArrayIndex: number, field: string | Array<string>) {
  const pengurusControls = <FormArray>form.controls['pengurusList'];
  const npwpControl = pengurusControls.at(formArrayIndex);
  return npwpControl.get(field).valid &&
    (npwpControl.get(field).untouched || npwpControl.get(field).dirty || npwpControl.get(field).pristine);
}

export function isSpanHiddenForNikPengurus(form: FormGroup, formArrayIndex: number, field: string | Array<string>) {
  const pengurusControls = <FormArray>form.controls['pengurusList'];
  const nikControl = pengurusControls.at(formArrayIndex);
  return nikControl.get(field).invalid &&
    (nikControl.get(field).untouched || nikControl.get(field).dirty || nikControl.get(field).pristine);
}

export function isSelected(form: FormGroup, field: string) {
  if (form.get(field).value === null) {
    return false;
  }
  return form.get(field).value !== "";
}

export function isSelectedValueOf(form: FormGroup, field: string, expectedValue: string) {
  if (form.get(field).value === null) {
    return false;
  }
  return form.get(field).value == expectedValue;
}

export function keyPressPattern(event: KeyboardEvent, pattern: RegExp) {
  const inputChar = event.key;

  if (!pattern.test(inputChar)) {
    // invalid character, prevent input
    event.preventDefault();
  }
}
