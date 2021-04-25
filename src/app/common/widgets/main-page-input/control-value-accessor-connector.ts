import {
  ControlContainer,
  ControlValueAccessor,
  FormControl,
  FormControlDirective,
} from '@angular/forms';
import { Component, Injector, Input, ViewChild } from '@angular/core';
import { ICONS } from 'src/app/data/uitls/enums';

@Component({
  template: '',
})
export class ControlValueAccessorConnector implements ControlValueAccessor {
  @ViewChild(FormControlDirective, { static: true })
  formControlDirective: FormControlDirective;
  @Input() values: any[];

  @Input()
  formControl: FormControl;

  @Input()
  formControlName: string;
  @Input()
  placeholder: string = '';
  @Input() icon: ICONS = ICONS.profile;

  get control() {
    return (
      this.formControl ||
      this.controlContainer?.control?.get(this.formControlName)
    );
  }

  constructor(private injector: Injector) {}

  get controlContainer() {
    return this.injector.get(ControlContainer);
  }

  registerOnTouched(fn: any): void {
    this.formControlDirective?.valueAccessor?.registerOnTouched(fn);
  }

  registerOnChange(fn: any): void {
    this.formControlDirective?.valueAccessor?.registerOnChange(fn);
  }

  writeValue(obj: any): void {
    this.formControlDirective?.valueAccessor?.writeValue(obj);
  }

  setDisabledState(isDisabled: boolean): void {
    if (this.formControlDirective?.valueAccessor?.setDisabledState)
      this.formControlDirective?.valueAccessor.setDisabledState(isDisabled);
  }
}
