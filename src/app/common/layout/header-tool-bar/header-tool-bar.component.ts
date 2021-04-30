import { Component, OnInit } from '@angular/core';
import { StaticInfo } from 'src/app/data/static/main-info';
import { Constants } from 'src/app/common/constants';
@Component({
  selector: 'app-header-tool-bar',
  templateUrl: './header-tool-bar.component.html',
  styleUrls: ['./header-tool-bar.component.scss'],
})
export class HeaderToolBarComponent implements OnInit {
  projectName = StaticInfo.projectName;
  isNavOpen = false;

  contactInfo = {
    phone: Constants.ourPhone,
    location: Constants.ourLocation,
    email: Constants.ourEmail,
  };

  constructor() {}

  ngOnInit(): void {}

  toggleNav() {
    this.isNavOpen = !this.isNavOpen;
  }
  goToProfile() {}
}
