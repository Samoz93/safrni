import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offers-filter',
  templateUrl: './offers-filter.component.html',
  styleUrls: ['./offers-filter.component.scss'],
})
export class OffersFilterComponent implements OnInit {
  constructor() {}
  cities = [
    {
      id: 1,
      name: 'Istanbul',
    },
    {
      id: 2,
      name: 'Bursa',
    },
    {
      id: 3,
      name: 'Antalya',
    },
    {
      id: 4,
      name: 'Marmaris',
    },
  ];
  tavelTypes = [
    {
      id: 1,
      name: 'Tourism',
    },
    {
      id: 2,
      name: 'Medical',
    },
  ];
  selectedCity = this.cities[0].name;
  selectedType = this.tavelTypes[0].name;

  ngOnInit(): void {}
}
