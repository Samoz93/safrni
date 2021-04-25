import { Component, OnInit } from '@angular/core';
import { StaticInfo } from 'src/app/data/static/main-info';

@Component({
  selector: 'app-header-tool-bar',
  templateUrl: './header-tool-bar.component.html',
  styleUrls: ['./header-tool-bar.component.scss'],
})
export class HeaderToolBarComponent implements OnInit {
  projectName = StaticInfo.projectName;
  isNavOpen = false;
  isProfileOpen = false;
  constructor() {}

  ngOnInit(): void {}

  toggleNav(isNav: boolean) {
    if (isNav) {
      this.isProfileOpen = false;
      this.isNavOpen = !this.isNavOpen;
    } else {
      this.isNavOpen = false;
      this.isProfileOpen = !this.isProfileOpen;
    }
  }
}
