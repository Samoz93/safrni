import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-icon',
  templateUrl: './header-icon.component.html',
  styleUrls: ['./header-icon.component.scss'],
})
export class HeaderIconComponent implements OnInit {
  @Input() icon: string = '';
  @Input() txt: string = '';
  @Input() nopadding = false;
  constructor() {}

  ngOnInit(): void {}
}
