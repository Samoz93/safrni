import { Pipe, PipeTransform } from '@angular/core';
import { LocalService } from '../services/local.service';
import { priceData } from './price-caculator.pipe';

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
  constructor(private loc: LocalService) {}
  transform(pr: priceData | string, ...args: any[]): string {
    // let basePrice;
    // let cur;
    // if (typeof pr == 'string') {
    //   basePrice = pr;
    //   cur = args[0];
    // } else {
    //   basePrice = pr?.basePrice;
    //   cur = pr?.currency;
    // }

    // return `${basePrice}${this.loc.getTranslation(`currencies.${cur}`)}`;
    return `${pr}$`;
  }
}
