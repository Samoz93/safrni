import { FocusMonitor } from '@angular/cdk/a11y';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import {
  Component,
  ElementRef,
  forwardRef,
  HostBinding,
  Inject,
  Input,
  OnInit,
  Optional,
  Self,
} from '@angular/core';
import {
  AbstractControl,
  FormControl,
  NgControl,
  NG_VALIDATORS,
} from '@angular/forms';
import {
  MatFormField,
  MatFormFieldControl,
  MAT_FORM_FIELD,
} from '@angular/material/form-field';
import { Observable, Subject } from 'rxjs';
import { GuestCountModel } from 'src/app/data/models/guestCountModel';
import { DevData } from 'src/app/data/static/main-info';
import { ICONS } from 'src/app/data/utils/enums';
const isInstanceOfGuesCount = (obj: any) => {
  if (typeof obj !== 'object') return false;
  return 'adult' in obj && 'child' in obj;
};
@Component({
  selector: 'app-guest-count-input',
  templateUrl: './guest-count-input.component.html',
  styleUrls: ['./guest-count-input.component.scss'],

  providers: [
    { provide: MatFormFieldControl, useExisting: GuestCountInputComponent },
    {
      provide: NG_VALIDATORS,
      useValue: (c: FormControl) => {
        let noValue = {
          message: 'the count should be at least 1 adult',
        };
        let notObject = {
          message: 'the object is worng',
        };

        return !isInstanceOfGuesCount(c.value)
          ? notObject
          : c.value.adult == 0 && c.value.child == 0
          ? noValue
          : null;
      },
      multi: true,
    },
  ],
})
export class GuestCountInputComponent
  implements OnInit, MatFormFieldControl<GuestCountModel> {
  _data: GuestCountModel = {
    adult: 0,
    child: 0,
  };
  icons = ICONS;
  @Input() max = 20;
  @Input()
  get placeholder() {
    return this._placeholder;
  }
  set placeholder(plh) {
    this._placeholder = plh;
    this.stateChanges.next();
  }
  private _placeholder: string = 'Guest';
  get value(): GuestCountModel {
    return this._data;
  }
  @Input()
  set value(obj: GuestCountModel) {
    if (isInstanceOfGuesCount(obj)) {
      if (obj.adult > this.max || obj.child > this.max) return;
      this._data = obj;
    } else {
      this._data = {
        adult: 1,
        child: 0,
      };
    }
    this.stateChanges.next();
    this.onChange(this._data);
  }
  onChange: any = () => {};
  touched = false;
  onTouched = () => {
    this.touched = true;
  };
  get hasValue() {
    return this.value.adult > 0 && this.value.child > 0;
  }

  constructor(
    @Self()
    @Optional()
    public ngControl: NgControl,
    private elRef: ElementRef<HTMLElement>,
    private fm: FocusMonitor,
    @Optional() @Inject(MAT_FORM_FIELD) public _formField: MatFormField,
    @Optional() public parentFormField: MatFormField
  ) {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
    fm.monitor(elRef, true).subscribe((origin) => {
      if (this.focused && !origin) {
        this.onTouched();
      }
      this.focused = !!origin;
      this.stateChanges.next();
    });
  }
  stateChanges = new Subject<void>();
  focused: boolean;
  empty: boolean;
  shouldLabelFloat: boolean;
  @Input()
  get required() {
    return this._required;
  }
  set required(req) {
    this._required = coerceBooleanProperty(req);
    this.stateChanges.next();
  }
  private _required = false;
  errorState: boolean;
  controlType = 'example-tel-input';
  autofilled?: boolean | undefined;
  @Input('aria-describedby') userAriaDescribedBy: string;
  setDescribedByIds(ids: string[]) {
    const controlElement = this.elRef.nativeElement.querySelector('.main')!;
    controlElement.setAttribute('aria-describedby', ids.join(' '));
  }
  onContainerClick(event: MouseEvent) {
    this.isShowen = true;
  }

  writeValue(obj: GuestCountModel): void {
    this.value = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  isShowen = false;
  ngOnInit(): void {
    console.log(this.value);
  }
  getValue(key: string): number {
    return Object(this.value)[key];
  }
  increase(key: string) {
    console.log('pressed');

    this.value = {
      ...this.value,
      [key]: this.getValue(key) + 1,
    };
  }
  decrease(key: string) {
    if (this.getValue(key) <= 0) return;
    this.value = {
      ...this.value,
      [key]: this.getValue(key) - 1,
    };
  }

  get str() {
    return `${this.value['adult']} Adult ${this.value['child']} Child`;
  }

  @Input() disabled: boolean;

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  get errmsg(): any[] | undefined {
    let lst;
    if (this.ngControl.errors && this.ngControl.dirty) {
      lst = [];
      Object.values(this.ngControl.errors).forEach((f) =>
        lst.push(this._getMsg(f))
      );
    }
    return lst;
  }
  _getMsg(name: any) {
    return DevData.errMsgs.filter((g) => g.name == name)[0]?.msg ?? name;
  }
  ngOnDestroy() {
    this.stateChanges.complete();
    this.fm.stopMonitoring(this.elRef);
  }

  static nextId = 0;
  _handleInput(control: AbstractControl, nextElement?: HTMLInputElement): void {
    this.autoFocusNext(control, nextElement);
    this.onChange(this.value);
  }
  autoFocusNext(
    control: AbstractControl,
    nextElement?: HTMLInputElement
  ): void {
    if (!control.errors && nextElement) {
      this.fm.focusVia(nextElement, 'program');
    }
  }

  autoFocusPrev(control: AbstractControl, prevElement: HTMLInputElement): void {
    if (control.value.length < 1) {
      this.fm.focusVia(prevElement, 'program');
    }
  }
  @HostBinding() id = `test-${GuestCountInputComponent.nextId++}`;
}
