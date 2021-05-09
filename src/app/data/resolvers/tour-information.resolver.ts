import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Injectable } from '@angular/core';
import { SplashScreenStateService } from '../services/splash-screen-state.service';
import { TripService } from '../services/trip.service';
import { TripModel } from '../models/TripModel';
@Injectable({ providedIn: 'root' })
export class TourInformationResolver implements Resolve<any> {
  constructor(
    private splashScreenStateService: SplashScreenStateService,
    private tripService: TripService
  ) {}
  async resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<{ trip: TripModel }> {
    this.splashScreenStateService.start();
    let tripId = route.paramMap.get('id');
    let trip = await this.tripService.getTripById(tripId!);

    this.splashScreenStateService.stop();
    return {
      trip: trip,
    };
  }
}
