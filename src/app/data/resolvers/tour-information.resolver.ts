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
@Injectable({ providedIn: 'root' })
export class TourInformationResolver implements Resolve<any> {
  constructor(
    private splashScreenStateService: SplashScreenStateService,
    private tripService: TripService
  ) {}
  async resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<{ trip: TripModel; timelines: TimelineModel[] }> {
    //redirect
    //return
    this.splashScreenStateService.start();
    let tripId = route.paramMap.get('id');
    let trip = await this.tripService.getTripById(tripId!);
    let timelines = await this.tripService.getTimeline(trip.timelineId);
    this.splashScreenStateService.stop();
    return {
      trip: trip,
      timelines: timelines!,
    };
  }
}
