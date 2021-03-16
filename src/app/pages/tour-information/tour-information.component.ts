import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tour-information',
  templateUrl: './tour-information.component.html',
  styleUrls: ['./tour-information.component.scss'],
})
export class TourInformationComponent implements OnInit {
  selectedTab = 1;
  constructor() {}

  ngOnInit(): void {}

  setTabIndex(index: number) {
    this.selectedTab = index;
  }

  styleObject(index: number) {
    return {
      display: index === this.selectedTab ? 'unset' : 'none',
      opacity: index === this.selectedTab ? 1 : 0,
    };
  }
}
