import { formatDate } from '@angular/common';
import { Injectable } from '@angular/core';
import { LocalService } from './local.service';
import {
  CreateBookingQueryGQL,
  Enum_Booking_Currency,
} from './saferniGraphql.service';

@Injectable({ providedIn: 'root' })
export class BookingService {
  constructor(
    private bookingGql: CreateBookingQueryGQL,
    private loc: LocalService
  ) {}

  async createBooking(
    tripId: string,
    fullName: string,
    basePrice: number,
    basePeopleCount: number,
    discount: number,
    currency: Enum_Booking_Currency,
    phone: string,
    arrivalDate: Date,
    email: string,
    message?: string
  ): Promise<boolean> {
    let result = await this.bookingGql
      .mutate({
        tripId: tripId,
        fullName: fullName,
        basePrice: basePrice,
        basePeopleCount: basePeopleCount,
        discount: discount,
        currency: currency,
        phone: phone,
        arrivalDate: '2020-02-02',
        message: message,
        email: email,
        language: this.loc.locale,
      })
      .toPromise();

    return result.data?.createBooking != null && !result.errors;
  }
}
