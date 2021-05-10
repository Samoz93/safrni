import { Injectable } from '@angular/core';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { CityService } from './city.service';
import { LocalService } from './local.service';
import { TripService } from './trip.service';

@Injectable({
  providedIn: null,
})
export class LandingService {
  constructor(
    private loc: LocalService,
    private cityser: CityService,
    private trip: TripService
  ) {
    this.cityser.init();
    this.trip.init();
  }

  max = 7;
  get homePageObservable() {
    const x = combineLatest([
      this.loc.isArabic$,
      this.cityser.data$,
      this.trip.data$,
    ]).pipe(
      map((f) => {
        return {
          isArabic: f[0],
          cities: f[1],
          trips: f[2],
        };
      })
    );

    return x;
  }
}
