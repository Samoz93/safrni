import { Pipe, PipeTransform } from '@angular/core';
import { Price } from '../models/TripModel';

@Pipe({
  name: 'price',
})
export class PricePipe implements PipeTransform {
  transform(value: Price, ...args: unknown[]): unknown {
    const sign = signs.filter((f) => f.id == value.currency)[0]?.sign ?? '$';
    return `${value.basePrice} ${sign}`;
  }
}

const signs = [
  { id: 'dollar', sign: '$' },
  { id: 'lira', sign: '₺' },
];
