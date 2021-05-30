import { Component, Input, OnInit } from '@angular/core';
import { StaticInfo } from 'src/app/data/static/main-info';

@Component({
  selector: 'app-oursocialmedia',
  templateUrl: './oursocialmedia.component.html',
  styleUrls: ['./oursocialmedia.component.scss'],
})
export class OursocialmediaComponent implements OnInit {
  socialMedia = [
    { icon: 'instagram.svg', link: StaticInfo.insta },
    { icon: 'facebook.svg', link: StaticInfo.facebook },
    { icon: 'twitter.svg', link: StaticInfo.twitter },
  ];
  constructor() {}
  @Input() isSmallIcons = true;
  @Input() isWhite = true;
  ngOnInit(): void {}

  getType(icon: string) {
    return icon.replace('.svg', '');
  }
}
