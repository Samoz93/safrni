import { Injectable } from '@angular/core';
import { WINDOW_SIZE } from '../utils/enums';

@Injectable({
  providedIn: 'root',
})
export class WindowService {
  constructor() {}
  //large 1000
  // medium 750
  // small 500
  //thum

  // get windowSize(): WINDOW_SIZE {
  //   const wdth = window.innerWidth;
  //   if (wdth >= WINDOW_SIZE.large) return WINDOW_SIZE.large;
  //   if (wdth >= WINDOW_SIZE.medium) return WINDOW_SIZE.medium;
  //   if (wdth >= WINDOW_SIZE.small) return WINDOW_SIZE.small;
  //   if (wdth < 250) {
  //     return WINDOW_SIZE.thumb;
  //   } else return WINDOW_SIZE.small;
  // }

  getWidthByElementWidth(wdth: number): WINDOW_SIZE {
    if (wdth >= WINDOW_SIZE.large) return WINDOW_SIZE.large;
    if (wdth >= WINDOW_SIZE.medium) return WINDOW_SIZE.medium;
    if (wdth >= WINDOW_SIZE.small) return WINDOW_SIZE.small;
    if (wdth < 250) {
      return WINDOW_SIZE.thumb;
    } else return WINDOW_SIZE.small;
  }
}
