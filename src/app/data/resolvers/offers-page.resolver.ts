import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  Router,
} from '@angular/router';
import { TripModel } from '../models/TripModel';
import { ErrorService } from '../services/error.service';
import { LocalService } from '../services/local.service';
import { MetaService } from '../services/meta.service';
import { SplashScreenStateService } from '../services/splash-screen-state.service';
import { TripService } from '../services/trip.service';

@Injectable({
  providedIn: 'root',
})
export class OffersPageResolver implements Resolve<any> {
  constructor(
    private splashScreenStateService: SplashScreenStateService,
    private tripService: TripService,
    private meta: MetaService,
    private loc: LocalService,
    private router: Router,
    private _errSer: ErrorService
  ) {}
  async resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<TripModel[] | null> {
    try {
      this.splashScreenStateService.start();
      let cities = route.queryParams['cities'] ?? [];
      let maxPrice = route.queryParams['maxPrice'] ?? 0;
      let minPrice = route.queryParams['minPrice'] ?? 0;
      let tripType = route.queryParams['tripType'];
      let travelType = route.queryParams['travelType'];
      console.log(travelType);

      let trip = await this.tripService.queryTrips({
        cities,
        maxPrice,
        minPrice,
        tripType,
        travelType,
      });
      let meta = {};
      if (trip) {
        const d = trip[0];
        meta = {
          description: d?.description,
          image: d?.previewImage?.url,
          type: d?.travelType,
        };
      }
      this.meta.addTags(meta);
      this.splashScreenStateService.stop();
      return trip;
    } catch (error) {
      this.router.navigate([...route.parent?.url!]);
      this._errSer.showErrorByException(error);
      return null;
    } finally {
      this.splashScreenStateService.stop();
    }
  }
}
