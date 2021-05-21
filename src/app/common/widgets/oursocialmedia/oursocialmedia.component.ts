import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-oursocialmedia',
  templateUrl: './oursocialmedia.component.html',
  styleUrls: ['./oursocialmedia.component.scss'],
})
export class OursocialmediaComponent implements OnInit {
  socialMedia = [
    { icon: 'instagram.svg', link: 'Saferni@emali.com' },
    { icon: 'facebook.svg', link: '90 537 695 8305' },
    { icon: 'twitter.svg', link: 'Istanbul, Turkey' },
  ];
  constructor() {}
  @Input() isSmallIcons = true;
  @Input() isWhite = true;
  ngOnInit(): void {}
}
