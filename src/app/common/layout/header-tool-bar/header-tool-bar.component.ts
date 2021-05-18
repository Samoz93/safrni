import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  email = StaticInfo.email;
  phone = StaticInfo.phoneNumber;
  contactInfo = {
    phone: StaticInfo.phoneNumber,
    location: StaticInfo.location,
    email: StaticInfo.email,
  };

  constructor(private loc: LocalService, private router: Router) {}

  ngOnInit(): void {}

  toggleNav() {
    this.isNavOpen = !this.isNavOpen;
  }
  goToProfile() {}

  navigateTo(location: string) {
    this.isNavOpen = false;
    this.router.navigate([location]);
  }
}
