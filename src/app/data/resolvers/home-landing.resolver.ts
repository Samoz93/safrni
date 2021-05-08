import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
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
export class HomeLandingResolver implements Resolve<any> {
  constructor(
    private splashScreenStateService: SplashScreenStateService,
    private cityService: CityService,
    private tripService: TripService
  ) {}
  async resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<{ cities: CityModel[]; trips: TripModel[] }> {
    let futureArray: [Promise<CityModel[]>, Promise<TripModel[]>] = [
      this.cityService.init(),
      this.tripService.init(),
    ];
    // await delay(113500);
    let data = await Promise.all(futureArray);
    this.splashScreenStateService.stop();
    return {
      cities: data[0],
      trips: data[1],
    };
  }
}
