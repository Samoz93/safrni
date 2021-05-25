import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ICONS } from 'src/app/data/utils/enums';

@Component({
  selector: 'app-validation-icon',
  templateUrl: './validation-icon.component.html',
  styleUrls: ['./validation-icon.component.scss'],
})
export class ValidationIconComponent implements OnInit {
  @Input() icon: ICONS;
  @Input() errors: any[] | undefined = [];
  @Input() isFocused: any;
  @Input() placeholder: string = '';

  constructor() {}

  ngOnInit(): void {}
}
