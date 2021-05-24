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
import { TimelineModel } from '../models/timelineModel';
import { MetaService } from '../services/meta.service';
import { LocalService } from '../services/local.service';
import { ErrorService } from '../services/error.service';
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
  ): Promise<{ trip: TripModel; timelines: TimelineModel[] } | null> {
    //redirect
    //return
    try {
      this.splashScreenStateService.start();
      let tripId = route.paramMap.get('id');

      let trip = await this.tripService.getLocalizedTrip(tripId!);
      let timelines = await this.tripService.getTimeline(trip.timelineId);


      this.meta.addTags({
        title: trip.name,
        description: trip.description,
        image: trip.previewImage.url,
      });
      return {
        trip: trip,
        timelines: timelines!,
      };
    } catch (error) {
      this.router.navigate([...route.parent?.url!]);
      this._errSer.showErrorByException(error);
      return null;
    } finally {
      this.splashScreenStateService.stop();
    }
  }
}
