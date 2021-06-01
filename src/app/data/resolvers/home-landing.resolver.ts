import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { Injectable } from '@angular/core';
import { SplashScreenStateService } from '../services/splash-screen-state.service';
import { CityService } from '../services/city.service';
import { TripService } from '../services/trip.service';
import { CityModel } from '../models/CityModel';
import { TripModel } from '../models/TripModel';
import { MetaService } from '../services/meta.service';
import { ErrorService } from '../services/error.service';
import { HomeBannerService } from '../services/home.banner.service';
import { MetaModel } from '../models/MetaModel';
@Injectable({ providedIn: 'root' })
export class HomeLandingResolver implements Resolve<any> {
  constructor(
    private splashScreenStateService: SplashScreenStateService,
    private cityService: CityService,
    private tripService: TripService,
    private homeBanner: HomeBannerService,
    private meta: MetaService,
    private router: Router,
    private _errSer: ErrorService
  ) {}
  async resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<{
    cities: CityModel[];
    trips: TripModel[];
    carousel: string[];
  } | null> {
    this.splashScreenStateService.start();
    let futureArray: [
      Promise<CityModel[]>,
      Promise<TripModel[]>,
      Promise<string[] | undefined>
    ] = [
      this.cityService.init(),
      this.tripService.init(),
      this.homeBanner.getCarouselImages(),
    ];

    let data = await Promise.all(futureArray);
    let meta: MetaModel = {};
    console.log(data);

    if (data && data[1] && data[1][0]) {
      const d = data[1][0];
      meta = {
        description: d.description,
        image: d.previewImage.url,
        type: d.travelType,
      };
    }
    this.meta.addTags(meta);
    this.splashScreenStateService.stop();
    return {
      cities: data[0],
      trips: data[1],
      carousel: data[2]!,
    };
    // try {

    // } catch (error) {
    //   // this.router.navigate([...route.parent?.url!]);
    //   this._errSer.showErrorByException(error);
    //   return null;
    // } finally {
    //   this.splashScreenStateService.stop();
    // }
  }
}
