import { Component, OnInit } from '@angular/core';
import { longX } from 'src/app/data/abstract/longX';
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
  ngOnInit(): void {
    this._ser.loadingState$.subscribe((f) => {
      this.isLoading = f.isLoading;
      console.log(this.isLoading, f.isLoading);
    });
  }

  get lnth() {
    return this._ser.data.length;
  }

  isLongX(index: number) {
    return innerWidth > 1625
      ? (this.lnth - 1) % 3 == 0 && this.lnth - 1 == index
      : this.lnth % 2 != 0 && this.lnth - 1 == index;
  }
}
