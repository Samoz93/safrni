import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  ActivatedRoute,
  Router,
} from '@angular/router';
import { Injectable } from '@angular/core';
import { interval, Observable, of } from 'rxjs';
import { SplashScreenStateService } from '../services/splash-screen-state.service';
import { CityService } from '../services/city.service';
import { TripService } from '../services/trip.service';
import { CityModel } from '../models/CityModel';
import { TripModel } from '../models/TripModel';
import { delay } from '../utils/helpers';
import { MetaService } from '../services/meta.service';
import { LocalService } from '../services/local.service';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDlgComponent } from 'src/app/common/widgets/error-dlg/error-dlg.component';
import { LoadingState } from '../static/main-info';
import { ErrorService } from '../services/error.service';
import { LocationModel } from '../models/LocationModel';
@Injectable({ providedIn: 'root' })
export class MapResolver implements Resolve<any> {
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
  ): Promise<{ trip: TripModel; locations: LocationModel[] } | null> {
    try {
      this.splashScreenStateService.start();
      let tripId = route.paramMap.get('id');
      let trip = await this.tripService.getLocalizedTrip(tripId!);
      let locations = await this.tripService.getLocations(trip.allLocationsIds);
      this.meta.addTags({
        title: this.loc.getTranslation('map.tourplan'),
        description: trip.description,
        image: trip.previewImage.url,
      });
      return {
        trip: trip,
        locations: locations!,
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
