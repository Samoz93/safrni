import { Component, OnInit } from '@angular/core';
import { LocalService } from 'src/app/data/services/local.service';
import { StaticInfo } from 'src/app/data/static/main-info';
@Component({
  selector: 'app-header-tool-bar',
  templateUrl: './header-tool-bar.component.html',
  styleUrls: ['./header-tool-bar.component.scss'],
})
export class HeaderToolBarComponent implements OnInit {
  projectName = StaticInfo.projectName;
  isNavOpen = false;

  contactInfo = {
    phone: StaticInfo.phoneNumber,
    location: StaticInfo.location,
    email: StaticInfo.email,
  };
  isArabic$;
  constructor(private loc: LocalService) {
    this.isArabic$ = loc.isArabic$;
  }

  ngOnInit(): void {}

  toggleNav() {
    this.isNavOpen = !this.isNavOpen;
  }
  goToProfile() {}
  
}
