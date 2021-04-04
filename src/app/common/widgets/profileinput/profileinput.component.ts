import {
  Component,
  forwardRef,
  Input,
  OnInit,
  Optional,
  Self,
} from '@angular/core';
import {
  ControlValueAccessor,
  NgControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { MatFormFieldControl } from '@angular/material/form-field';
import { Observable, Subject } from 'rxjs';

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
  ],
})
export class ProfileinputComponent implements OnInit, ControlValueAccessor {
  onChange: any = () => {};
  onTouched: any = () => {};
  @Input() showLabel = true;
  @Input() isColumn = false;
  disabled = false;
  @Input() label: String = '';

  constructor(@Optional() @Self() public ngControl: NgControl) {
    if (this.ngControl != null) {
      // Setting the value accessor directly (instead of using
      // the providers) to avoid running into a circular import.
      this.ngControl.valueAccessor = this;
    }
  }
  showError: boolean | null = false;
  _value: string = '';
  get value(): string {
    return this._value;
  }
  setDisabledState(isDisbled: boolean) {
    this.disabled = isDisbled;
  }
  @Input('value')
  set value(val: string) {
    this._value = val;
    this.onChange(val);
    this.showError =
      (this.ngControl.dirty || this.ngControl.touched) &&
      this.ngControl.invalid;
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

  ngOnInit(): void {}
}
