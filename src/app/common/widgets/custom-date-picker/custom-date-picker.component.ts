import { Component, forwardRef, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ControlValueAccessorConnector } from 'src/app/data/abstract/control-value-accessor-connector';
import { ICONS } from 'src/app/data/utils/enums';

@Component({
  selector: 'app-custom-date-picker',
  templateUrl: './custom-date-picker.component.html',
  styleUrls: ['./custom-date-picker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomDatePickerComponent),
      multi: true,
    },
  ],
})
export class CustomDatePickerComponent
  extends ControlValueAccessorConnector
  implements OnInit {
  ngOnInit(): void {}
  iconsData = ICONS;
  minDate: Date = new Date();
}
