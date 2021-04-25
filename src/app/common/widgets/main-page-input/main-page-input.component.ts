import { Component, Injector, Input, ViewChild } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  FormControlDirective,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { ControlValueAccessorConnector } from './control-value-accessor-connector';

@Component({
  selector: 'app-main-page-input',
  templateUrl: './main-page-input.component.html',
  styleUrls: ['./main-page-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: MainPageInputComponent,
      multi: true,
    },
  ],
})
export class MainPageInputComponent extends ControlValueAccessorConnector {}
