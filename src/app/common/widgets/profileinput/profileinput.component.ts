import { coerceBooleanProperty } from '@angular/cdk/coercion';
import {
  Component,
  Injector,
  Input,
  OnInit,
  DoCheck,
  HostBinding,
  forwardRef,
} from '@angular/core';
import {
  ControlValueAccessor,
  NgControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { MatFormFieldControl } from '@angular/material/form-field';
import { Subject } from 'rxjs';
import { ICONS } from 'src/app/data/uitls/enums';

@Component({
  selector: 'app-profileinput',
  templateUrl: './profileinput.component.html',
  styleUrls: ['./profileinput.component.scss'],
  providers: [
    // {
    //   provide: NG_VALUE_ACCESSOR,
    //   useExisting: forwardRef(() => ProfileinputComponent),
    //   multi: true,
    // },
    {
      provide: MatFormFieldControl,
      useExisting: ProfileinputComponent,
    },
  ],
})
export class ProfileinputComponent
  implements
    OnInit,
    ControlValueAccessor,
    MatFormFieldControl<string>,
    DoCheck {
  onChange: any = () => {};
  onTouched = () => {
    console.log('setting on toucvhed');

    this.touched = true;
  };
  touched = false;
  @Input() icon: ICONS = ICONS.profile;
  stateChanges = new Subject<void>();
  ngControl: NgControl;
  constructor(public injector: Injector) {
    this.ngControl = this.injector.get(NgControl);
    if (this.ngControl != null) {
      this.ngControl.valueAccessor = this;
    }
  }
  ngOnDestroy() {
    this.stateChanges.complete();
  }
  static nextId = 10;

  id: string = 's';
  focused: boolean;
  get empty() {
    return !!this._value.toString().trim();
  }
  @HostBinding('class.floating')
  get shouldLabelFloat() {
    return this.focused || !this.empty;
  }
  errorState: boolean | any;
  controlType = 'text';
  autofilled = true;
  userAriaDescribedBy?: string | undefined;
  @Input()
  isNumeric = false;

  @Input()
  get placeholder() {
    return this._placeholder;
  }
  set placeholder(plh) {
    this._placeholder = plh;
    this.stateChanges.next();
  }
  public _placeholder: string;
  @Input()
  get disabled() {
    return this._disabled;
  }
  set disabled(dis) {
    this._disabled = coerceBooleanProperty(dis);
    this.stateChanges.next();
  }
  public _disabled = false;

  setDescribedByIds(ids: string[]): void {
    // throw new Error('Method not implemented.');
  }
  onContainerClick(event: MouseEvent): void {
    // throw new Error('Method not implemented.');
    this.onTouched();
  }
  showError: boolean | null = false;
  _value: any = '';
  get value(): any {
    return this._value;
  }

  @Input()
  get required() {
    return this._required;
  }
  set required(req) {
    this._required = coerceBooleanProperty(req);
    this.stateChanges.next();
  }
  public _required = false;

  setDisabledState(isDisbled: boolean) {
    this.disabled = isDisbled;
  }
  @Input('value')
  set value(val: any) {
    this._value = val;
    this.onChange(val);
    this.stateChanges.next();
  }

  writeValue(obj: any): void {
    this.value = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  test() {
    console.log(this.ngControl);
  }

  getError() {
    const lst: string[] = [];

    for (const key in this.ngControl?.errors) {
      switch (key) {
        case 'email':
          lst.push('Please provide a valid Email');
          break;
        default:
          lst.push('Please provide a value');
          break;
      }
    }

    return lst;
  }

  hasError() {
    return this.getError().length > 0;
  }
  add(val: number) {
    const oldVal = Number.parseInt(this._value);
    const newVal = val + oldVal;
    this.value = newVal < 0 ? 0 : newVal;
  }
  ngOnInit(): void {}
  ngDoCheck(): void {
    if (this.ngControl) {
      this.errorState = this.ngControl.invalid && this.ngControl.dirty;
      // if ((this.ngControl.name = 'fullName')) {
      //   this.ngControl.invalid;
      //   console.log(`${this.ngControl.name} ${this.errorState}`);
      //   console.log(`invalid ${this.ngControl.invalid}`);
      //   console.log(`dirty ${this.ngControl.dirty}`);
      //   console.log(`touched ${this.ngControl.touched}`);
      // }

      this.stateChanges.next();
    }
  }
}
