import { Component, OnInit } from '@angular/core';
import { longX } from 'src/app/data/abstract/longX';
import { TripModel } from 'src/app/data/models/TripModel';
import { TripService } from 'src/app/data/services/trip.service';

@Component({
  selector: 'app-section-offers',
  templateUrl: './section-offers.component.html',
  styleUrls: ['./section-offers.component.scss'],
})
export class SectionOffersComponent extends longX implements OnInit {
  isLoading = true;
  constructor(public _ser: TripService) {
    super();
  }
  trips: TripModel[];

  ngOnInit(): void {
    this._ser.data$.subscribe((trips) => (this.trips = trips));
  }

  get lnth() {
    return this.trips.length;
  }

  isLongX(index: number) {
    return innerWidth > 1625
      ? (this.lnth - 1) % 3 == 0 && this.lnth - 1 == index
      : this.lnth % 2 != 0 && this.lnth - 1 == index;
  }
}
