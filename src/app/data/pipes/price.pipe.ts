import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price',
})
export class PricePipe implements PipeTransform {
 
  transform(pr: string | number | null, ...args: unknown[]): unknown {
    
    return `${pr?.toString()}$`;
  }
}

const signs = [
  { id: 'dollar', sign: '$' },
  { id: 'lira', sign: '₺' },
];
