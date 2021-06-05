import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e404',
  templateUrl: './e404.component.html',
  styleUrls: ['./e404.component.scss'],
})
export class E404Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  options = {
    autoplay: true,
    loop: 0,
    path: '../../../../assets/animation/404.json',
  };
}
