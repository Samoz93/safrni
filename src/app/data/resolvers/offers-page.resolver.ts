import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { TripModel } from '../models/TripModel';
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
    private loc: LocalService
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
    // const tr = trip[0]?;
    // const title = this.loc.getTranslation('seo.offerTitle', {
    //   var: trip[0]?.city?.name,
    // });

    // this.meta.addTags({
    //   title: title,
    //   description: trip[0].description,
    //   image: trip[0].previewImage.url,
    // });
    this.splashScreenStateService.stop();
    return trip;
  }
}
