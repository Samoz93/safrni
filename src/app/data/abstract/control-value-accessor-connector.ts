import {
  ControlContainer,
  ControlValueAccessor,
  FormControl,
  FormControlDirective,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import {
  Component,
  forwardRef,
  Injector,
  Input,
  ViewChild,
} from '@angular/core';
import { MyControlAbstract } from './my-controls-abstract';
import { DevData } from '../static/main-info';

@Component({
  template: '',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ControlValueAccessorConnector),
      multi: true,
    },
  ],
})
export class ControlValueAccessorConnector
  extends MyControlAbstract
  implements ControlValueAccessor {
  @ViewChild(FormControlDirective, { static: true })
  formControlDirective: FormControlDirective;
  @Input() values: any[];

  @Input()
  formControl: FormControl;

  @Input()
  formControlName: string;
  @Input()
  placeholder: string = '';

  get control() {
    return (
      this.formControl ||
      this.controlContainer?.control?.get(this.formControlName)
    );
  }

  constructor(private injector: Injector) {
    super();
  }

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

  get errmsg(): any[] | undefined {
    let lst;
    if (this.control.errors && this.control.dirty) {
      lst = [];
      Object.keys(this.control.errors).forEach((f) =>
        lst.push(this._getMsg(f))
      );
    }
    return lst;
  }
  _getMsg(name: any) {
    return DevData.errMsgs.filter((g) => g.name == name)[0]?.msg ?? name;
  }
}
