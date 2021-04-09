import { Component, OnInit } from '@angular/core';
import { ProfileEnum } from 'src/app/data/uitls/enums';
import { UserProfileComponent } from './tabs/user-profile/user-profile.component';

@Component({
  selector: 'app-user-profile-landing',
  templateUrl: './user-profile-landing.component.html',
  styleUrls: ['./user-profile-landing.component.scss'],
})
export class UserProfileLandingComponent implements OnInit {
  type = ProfileEnum.security;
  enum = ProfileEnum;

  profile = new UserProfileComponent();
  constructor() {}

  ngOnInit(): void {}

  changeType(newType: ProfileEnum) {
    this.type = newType;
  }
}
