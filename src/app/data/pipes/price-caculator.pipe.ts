import { Pipe, PipeTransform } from '@angular/core';
import { GuestCountModel } from '../models/guestCountModel';

@Pipe({
  name: 'priceCaculator',
})
export class PriceCaculatorPipe implements PipeTransform {
  transform(pr: priceData, count: GuestCountModel): string {
    return `${pr.basePrice + count.adult * 10}`;
  }
}

export interface priceData {
  basePrice: number;
  currency: string;
}
