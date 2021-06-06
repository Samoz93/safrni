import { formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { LocalService } from './local.service';
import {
  CreateBookingQueryGQL,
  Enum_Booking_Currency,
} from './saferniGraphql.service';

@Injectable({ providedIn: 'root' })
export class BookingService {
  constructor(
    private bookingGql: CreateBookingQueryGQL,
    private loc: LocalService,
    private http: HttpClient
  ) {}

  async cancelBooking(id: string) {
    await this.http
      .get(`${environment.api}/cancelBooking?id=${id}`)
      .toPromise();
  }
  async confirmBooking(id: string) {
    await this.http
      .get(`${environment.api}/confirmBooking?id=${id}`)
      .toPromise();
  }

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
    adults: number,
    children: number,
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
        arrivalDate: formatDate(arrivalDate, 'yyyy-MM-dd', 'en'),
        message: message,
        email: email,
        language: this.loc.locale,
        adults,
        children,
      })
      .toPromise();

    return result.data?.createBooking != null && !result.errors;
  }
}
