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
  HostBinding,
  HostListener,
  Injector,
  Input,
  ViewChild,
} from '@angular/core';
import { ICONS } from 'src/app/data/uitls/enums';

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
export class ControlValueAccessorConnector implements ControlValueAccessor {
  @ViewChild(FormControlDirective, { static: true })
  formControlDirective: FormControlDirective;
  @Input() values: any[];
  @Input() icon: ICONS = ICONS.profile;

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
    console.log(this.control);
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
    return errMsgs.filter((g) => g.name == name)[0]?.msg ?? name;
  }
  isfocused = false;
  onFocus(e: any) {
    this.isfocused = true;
  }

  onFocusOut() {
    this.isfocused = false;
  }
}

const errMsgs = [
  {
    name: 'required',
    msg: 'this field is required',
  },
];
