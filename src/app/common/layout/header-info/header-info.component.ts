import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-info',
  templateUrl: './header-info.component.html',
  styleUrls: ['./header-info.component.scss'],
})
export class HeaderInfoComponent implements OnInit {
  isSigned = true;
  quickReach = [
    { icon: 'email.svg', info: 'Saferni@emali.com' },
    { icon: 'phone.svg', info: '90 537 695 8305' },
    { icon: 'location.svg', info: 'Istanbul, Turkey' },
  ];
  socialMedia = [
    { icon: 'instagram.svg', link: 'Saferni@emali.com' },
    { icon: 'facebook.svg', link: '90 537 695 8305' },
    { icon: 'twitter.svg', link: 'Istanbul, Turkey' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
