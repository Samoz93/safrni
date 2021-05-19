import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Injectable } from '@angular/core';
import { SplashScreenStateService } from '../services/splash-screen-state.service';
import { CityService } from '../services/city.service';
import { TripService } from '../services/trip.service';
import { CityModel } from '../models/CityModel';
import { TripModel } from '../models/TripModel';
import { MetaService } from '../services/meta.service';
@Injectable({ providedIn: 'root' })
export class HomeLandingResolver implements Resolve<any> {
  constructor(
    private splashScreenStateService: SplashScreenStateService,
    private cityService: CityService,
    private tripService: TripService,
    private meta: MetaService
  ) {}
  async resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<{ cities: CityModel[]; trips: TripModel[] }> {
    this.splashScreenStateService.start();
    let futureArray: [Promise<CityModel[]>, Promise<TripModel[]>] = [
      this.cityService.init(),
      this.tripService.init(),
    ];

    let data = await Promise.all(futureArray);
    this.meta.addTags({
      description: data[1][0].description,
    });
    this.splashScreenStateService.stop();
    return {
      cities: data[0],
      trips: data[1],
    };
  }
}
