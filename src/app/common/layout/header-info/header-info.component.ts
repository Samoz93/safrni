import { Component, OnInit } from '@angular/core';
import { StaticInfo } from 'src/app/data/static/main-info';

@Component({
  selector: 'app-header-info',
  templateUrl: './header-info.component.html',
  styleUrls: ['./header-info.component.scss'],
})
export class HeaderInfoComponent implements OnInit {
  isSigned = true;
  quickReach = [
    { icon: 'email.svg', info: StaticInfo.projectName },
    { icon: 'phone.svg', info: StaticInfo.phoneNumber },
    { icon: 'location.svg', info: 'Istanbul, Turkey' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
