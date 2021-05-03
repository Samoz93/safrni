import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { TripModel } from 'src/app/data/models/TripModel';
import { TripService } from 'src/app/data/services/trip.service';
import { StaticInfo, TABS } from 'src/app/data/static/main-info';

@Component({
  selector: 'app-offers-page',
  templateUrl: './offers-page.component.html',
  styleUrls: ['./offers-page.component.scss'],
})
export class OffersPageComponent implements OnInit {
  images = [
    'https://wallpapercave.com/wp/wp1813727.jpg',
    'https://wallpapercave.com/wp/wp1813725.jpg',
    'https://i.ytimg.com/vi/no7LCcGTvn8/maxresdefault.jpg',
  ];
  projectName = StaticInfo.projectName;
  filterOptions = {
    type: TABS.tour,
    count: {
      adult: 0,
      child: 0,
    },
    minPrice: '',
    maxPrice: '',
  };
  minPriceCtrl: FormControl;
  maxPriceCtrl: FormControl;
  data$: Observable<TripModel[]>;
  constructor(public _ser: TripService) {}

  ngOnInit(): void {
    this.minPriceCtrl = new FormControl(this.filterOptions.minPrice);
    this.maxPriceCtrl = new FormControl(this.filterOptions.maxPrice);
    this.data$// this._ser.data$;
    this.minPriceCtrl.valueChanges.subscribe((f) => {
      let val = f;
      if (isNaN(val)) val = 0;
      this.filterOptions = {
        ...this.filterOptions,
        minPrice: val,
      };
    });
    this.maxPriceCtrl.valueChanges.subscribe((f) => {
      let val = f;
      if (isNaN(val)) val = 0;
      this.filterOptions = {
        ...this.filterOptions,
        maxPrice: val,
      };
    });
  }

  changeType(type: any) {
    this.filterOptions = {
      ...this.filterOptions,
      type: type,
    };
  }

  increase(key: string) {
    let newCount = Object(this.filterOptions.count)[key] + 1;
    if (newCount <= 0) newCount = 0;

    this.filterOptions = {
      ...this.filterOptions,
      count: {
        ...this.filterOptions.count,
        [key]: newCount,
      },
    };
  }
  decrease(key: any) {
    let newCount = Object(this.filterOptions.count)[key] - 1;
    if (newCount <= 0) newCount = 0;
    this.filterOptions = {
      ...this.filterOptions,
      count: {
        ...this.filterOptions.count,
        [key]: newCount,
      },
    };
  }
}
