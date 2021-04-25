import { Component, Input, OnInit } from '@angular/core';
import { ControlValueAccessorConnector } from '../main-page-input/control-value-accessor-connector';

@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.scss'],
})
export class CustomSelectComponent extends ControlValueAccessorConnector {
  ngOnInit(): void {}
}
