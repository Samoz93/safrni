import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Injectable } from '@angular/core';
import { SplashScreenStateService } from '../services/splash-screen-state.service';
import { TripService } from '../services/trip.service';
import { TripModel } from '../models/TripModel';
import { TimelineModel } from '../models/timelineModel';
import { MetaService } from '../services/meta.service';
import { LocalService } from '../services/local.service';
@Injectable({ providedIn: 'root' })
export class TourInformationResolver implements Resolve<any> {
  constructor(
    private splashScreenStateService: SplashScreenStateService,
    private tripService: TripService,
    private meta: MetaService
  ) {}
  async resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<{ trip: TripModel; timelines: TimelineModel[] }> {
    //redirect
    //return
    this.splashScreenStateService.start();
    let tripId = route.paramMap.get('id');

    let trip = await this.tripService.getLocalizedTrip(tripId!);
    let timelines = await this.tripService.getTimeline(trip.timelineId);

    this.meta.addTags({
      title: trip.name,
      description: trip.description,
      image: trip.previewImage.url,
    });
    this.splashScreenStateService.stop();
    return {
      trip: trip,
      timelines: timelines!,
    };
  }
}
