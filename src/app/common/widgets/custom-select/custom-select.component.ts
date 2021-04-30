import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ControlValueAccessorConnector } from 'src/app/data/abstract/control-value-accessor-connector';
import { ICONS } from 'src/app/data/uitls/enums';

@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomSelectComponent),
      multi: true,
    },
  ],
})
export class CustomSelectComponent extends ControlValueAccessorConnector {
  getImage(icon: string): string {
    if (icon) return 'assets/images/svgs/' + icon + '.svg';
    return '';
  }
}
