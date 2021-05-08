import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  ActivatedRoute,
} from '@angular/router';
import { Injectable } from '@angular/core';
import { interval, Observable, of } from 'rxjs';
import { SplashScreenStateService } from '../services/splash-screen-state.service';
import { CityService } from '../services/city.service';
import { TripService } from '../services/trip.service';
import { CityModel } from '../models/CityModel';
import { TripModel } from '../models/TripModel';
import { delay } from '../utils/helpers';
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
