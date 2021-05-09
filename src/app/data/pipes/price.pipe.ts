import { Pipe, PipeTransform } from '@angular/core';
import { PriceModel } from '../models/PriceModel';

@Pipe({
  name: 'price',
})
export class PricePipe implements PipeTransform {
  transform(pr: PriceModel, ...args: unknown[]): unknown {
    if (!pr) return 'No PR';
    const sign = signs.filter((f) => f.id == pr?.currency)[0]?.sign ?? '$';
    return `${pr?.basePrice ?? 0} ${sign}`;
  }
}

const signs = [
  { id: 'dollar', sign: '$' },
  { id: 'lira', sign: '₺' },
];
