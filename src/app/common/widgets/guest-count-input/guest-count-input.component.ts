import { Component, OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-guest-count-input',
  templateUrl: './guest-count-input.component.html',
  styleUrls: ['./guest-count-input.component.scss'],
})
export class GuestCountInputComponent implements OnInit, ControlValueAccessor {
  data: { [key: string]: number } = {
    adult: 1,
    child: 0,
    infant: 0,
  };
  onChange: any = () => {};
  touched = false;
  onTouched = () => {
    console.log('setting on toucvhed');

    this.touched = true;
  };

  constructor() {}
  writeValue(obj: any): void {
    this.data = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  isShowen = true;
  ngOnInit(): void {}

  increase(key: string) {
    console.log('pressed');

    this.data = {
      ...this.data,
      [key]: this.data[key] + 1,
    };
    this.onChange(this.data);
  }
  decrease(key: string) {
    if (this.data[key] <= 0) return;
    this.data = {
      ...this.data,
      [key]: this.data[key] - 1,
    };
    this.onChange(this.data);
  }

  get str() {
    return `${this.data['adult']} Adult ${this.data['child']} Child ${this.data['infant']} Infant`;
  }
}
