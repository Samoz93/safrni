import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {
  NgxPopperjsContentComponent,
  NgxPopperjsPlacements,
  NgxPopperjsTriggers,
} from 'ngx-popperjs';
import { ICONS } from 'src/app/data/uitls/enums';

@Component({
  selector: 'app-validation-icon',
  templateUrl: './validation-icon.component.html',
  styleUrls: ['./validation-icon.component.scss'],
})
export class ValidationIconComponent implements OnInit {
  @Input() icon: ICONS;
  @Input() errors: any[] | undefined = [];
  @Input() isFocused: any;
  @ViewChild('content', { static: true }) popper: NgxPopperjsContentComponent;
  placement = NgxPopperjsPlacements;
  triggers = NgxPopperjsTriggers;

  constructor() {}

  ngOnInit(): void {}
}
