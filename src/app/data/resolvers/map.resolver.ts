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
import { TimelineModel } from '../models/timelineModel';
import { MetaService } from '../services/meta.service';
import { LocalService } from '../services/local.service';
@Injectable({ providedIn: 'root' })
export class MapResolver implements Resolve<any> {
  constructor(
    private splashScreenStateService: SplashScreenStateService,
    private tripService: TripService,
    private meta: MetaService,
    private loc: LocalService
  ) {}
  async resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<{ trip: TripModel; timelines: TimelineModel[] }> {
    this.splashScreenStateService.start();
    let tripId = route.paramMap.get('id');
    let trip = await this.tripService.getLocalizedTrip(tripId!);
    let timelines = await this.tripService.getTimeline(trip.timelineId);
    this.splashScreenStateService.stop();
    this.meta.addTags({
      title: this.loc.getTranslation('map.tourplan'),
      description: trip.description,
      image: trip.previewImage.url,
    });
    return {
      trip: trip,
      timelines: timelines!,
    };
  }
}
