import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price',
})
export class PricePipe implements PipeTransform {
  // transform(pr: any | null, ...args: any[]): string {
  //   const countObj = args[0];
  //   const adultCount = countObj.adult;
  //   const childern = countObj.children;
  //   const cur = countObj.currency;
  //   return `${pr + adultCount * 10}$ ${cur}`;
  // }
  transform(pr: string | number | null, ...args: unknown[]): string {
    return `${pr?.toString()}$`;
  }
}

const signs = [
  { id: 'dollar', sign: '$' },
  { id: 'lira', sign: '₺' },
];
