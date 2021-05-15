import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { TripModel } from '../models/TripModel';
import { SplashScreenStateService } from '../services/splash-screen-state.service';
import { TripService } from '../services/trip.service';

@Injectable({
  providedIn: 'root',
})
export class OffersPageResolver implements Resolve<any> {
  constructor(
    private splashScreenStateService: SplashScreenStateService,
    private tripService: TripService
  ) {}
  async resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<TripModel[]> {
    this.splashScreenStateService.start();
    let cityId = route.queryParams['city'];

    let trip = await this.tripService.queryTrips({
      cityId: cityId,
      limit: 30,
    });

    this.splashScreenStateService.stop();
    return trip;
  }
}
