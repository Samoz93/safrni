import { formatDate } from '@angular/common';
import { Injectable } from '@angular/core';
import {
  CreateBookingQueryGQL,
  Enum_Booking_Currency,
} from './saferniGraphql.service';

@Injectable({ providedIn: 'root' })
export class BookingService {
  constructor(private bookingGql: CreateBookingQueryGQL) {}

  async createBooking(
    tripId: string,
    fullName: string,
    basePrice: number,
    basePeopleCount: number,
    discount: number,
    currency: Enum_Booking_Currency,
    phone: string,
    arrivalDate: Date,
    message?: string
  ): Promise<boolean> {
    console.log();

    let result = await this.bookingGql
      .mutate({
        tripId: tripId,
        fullName: fullName,
        basePrice: basePrice,
        basePeopleCount: basePeopleCount,
        discount: discount,
        currency: currency,
        phone: phone,
        arrivalDate: formatDate(arrivalDate, 'yyyy-MM-dd', 'en'),
        message: message,
      })
      .toPromise();

    return result.data?.createBooking != null && !result.errors;
  }
}
