import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { longX } from 'src/app/data/abstract/longX';
import { TripModel } from 'src/app/data/models/TripModel';
import { TripService } from 'src/app/data/services/trip.service';

@Component({
  selector: 'app-section-offers',
  templateUrl: './section-offers.component.html',
  styleUrls: ['./section-offers.component.scss'],
})
export class SectionOffersComponent extends longX implements OnInit, OnDestroy {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    super();
  }
  trips: TripModel[];
  sub: Subscription;
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngOnInit() {
    this.sub = this.activatedRoute.data.subscribe((data) => {
      this.trips = data.initData.trips;
      console.log(data.initData.trips);
    });
  }

  get lnth() {
    return this.trips.length;
  }

  // isLongX(index: number) {
  //   return innerWidth > 1625
  //     ? (this.lnth - 1) % 3 == 0 && this.lnth - 1 == index
  //     : this.lnth % 2 != 0 && this.lnth - 1 == index;
  // }
}
