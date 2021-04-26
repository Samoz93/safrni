import {
  Component,
  forwardRef,
  Injector,
  Input,
  ViewChild,
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ControlValueAccessorConnector } from 'src/app/data/abstract/control-value-accessor-connector';

@Component({
  selector: 'app-main-page-input',
  templateUrl: './main-page-input.component.html',
  styleUrls: ['./main-page-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MainPageInputComponent),
      multi: true,
    },
  ],
})
export class MainPageInputComponent extends ControlValueAccessorConnector {}
