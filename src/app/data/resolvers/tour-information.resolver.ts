import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { Injectable } from '@angular/core';
import { SplashScreenStateService } from '../services/splash-screen-state.service';
import { TripService } from '../services/trip.service';
import { TripModel } from '../models/TripModel';
import { MetaService } from '../services/meta.service';
import { LocalService } from '../services/local.service';
import { ErrorService } from '../services/error.service';
import { LocationModel } from '../models/LocationModel';
@Injectable({ providedIn: 'root' })
export class TourInformationResolver implements Resolve<any> {
  constructor(
    private splashScreenStateService: SplashScreenStateService,
    private tripService: TripService,
    private meta: MetaService,
    private router: Router,
    private _errSer: ErrorService
  ) {}
  async resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<{ trip: TripModel; locations: LocationModel[] } | null> {
    //redirect
    //return
    this.splashScreenStateService.start();
    let tripId = route.paramMap.get('id');

    let trip = await this.tripService.getLocalizedTrip(tripId!);
    let locations = await this.tripService.getLocations(trip.allLocationsIds);

    this.meta.addTags({
      title: trip.name,
      description: trip.description,
      image: trip.previewImage.url,
    });
    this.splashScreenStateService.stop();
    return {
      trip: trip,
      locations: locations!,
    };
    // try {

    // } catch (error) {
    //   this.router.navigate([...route.parent?.url!]);
    //   this._errSer.showErrorByException(error);
    //   return null;
    // } finally {
    //   this.splashScreenStateService.stop();
    // }
  }
}
