import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price',
})
export class PricePipe implements PipeTransform {
  // transform(pr: string, ...args: unknown[]): unknown {
  //   if (!pr) return '';
  //   const sign = signs.filter((f) => f.id == pr.currency)[0]?.sign ?? '$';
  //   return `${pr?.basePrice ?? 0} ${sign}`;
  // }
  transform(pr: string | null, ...args: unknown[]): unknown {
    return `${pr}$`;
  }
}

const signs = [
  { id: 'dollar', sign: '$' },
  { id: 'lira', sign: '₺' },
];
