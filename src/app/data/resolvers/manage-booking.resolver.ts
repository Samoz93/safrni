import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Injectable } from '@angular/core';
import { SplashScreenStateService } from '../services/splash-screen-state.service';
import { BookingService } from '../services/booking.service';
@Injectable({ providedIn: 'root' })
export class ManageBookingResolver implements Resolve<any> {
  constructor(
    private splashScreenStateService: SplashScreenStateService,
    private bookingService: BookingService
  ) {}
  async resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<{ type: string; success: boolean } | null> {
    this.splashScreenStateService.start();
    let bookingId = route.queryParams.id;
    let type = route.queryParams.type;
    console.log(`manage booking ${bookingId}`);
    if (type === 'cancel') {
      await this.bookingService.cancelBooking(bookingId!);
    } else if (type === 'confirm') {
      await this.bookingService.confirmBooking(bookingId!);
    }

    this.splashScreenStateService.stop();
    return {
      type: type!,
      success: true,
    };
  }
}
