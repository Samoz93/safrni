import { Component, OnInit } from '@angular/core';
import { LocationModel, Coordinates } from 'src/app/data/models/LocationModel';

@Component({
  selector: 'app-tour-information',
  templateUrl: './tour-information.component.html',
  styleUrls: ['./tour-information.component.scss'],
})
export class TourInformationComponent implements OnInit {
  selectedTab = 1;

  mapStepsMock = [
    new LocationModel(
      '1',
      'https://i4.hurimg.com/i/hurriyet/75/0x0/5f0867e50f254420f0a144e0.jpg',
      'aya sofya',
      'a random place in instanbul',
      { latitude: 41.008583, longitude: 28.980175 }
    ),
    new LocationModel(
      '2',
      'https://i.ytimg.com/vi/no7LCcGTvn8/maxresdefault.jpg',
      'kiz kulesi',
      'a random place in instanbul',
      { latitude: 41.0191765, longitude: 29.00444 }
    ),
    new LocationModel(
      '2',
      'https://tatilsepeti.cubecdn.net/images/Yalova-Termal-Otelleri.jpg',
      'Termal',
      'a random place in instanbul',
      { latitude: 40.6056569, longitude: 29.1723517 }
    ),
  ];

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
