import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceCaculator',
})
export class PriceCaculatorPipe implements PipeTransform {
  transform(pr: priceInterface, ...args: any[]): string {
    return `${pr.basePrice + pr.adult * 10}`;
  }
}

export interface priceInterface {
  adult: number;
  children: number;
  basePrice: number;
}
