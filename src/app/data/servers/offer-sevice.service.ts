import { Injectable } from '@angular/core';
import { OfferModel } from '../models/offerModel';
import { TripOptions } from '../models/variousModels';

@Injectable({
  providedIn: 'root',
})
export class OfferSeviceService {
  offers = [
    new OfferModel(
      '11',
      'https://idsb.tmgrup.com.tr/ly/uploads/images/2020/04/17/thumbs/800x531/31299.jpg',
      10,
      400,
      '$',
      'Istanbul',
      new TripOptions(true, true, true),
      3.25,
      []
    ),
    new OfferModel(
      '22',
      'https://idsb.tmgrup.com.tr/ly/uploads/images/2020/04/17/thumbs/800x531/31299.jpg',
      10,
      400,
      '$',
      'Istanbul',
      new TripOptions(true, true, true),
      3.25,
      []
    ),
    new OfferModel(
      '33',
      'https://idsb.tmgrup.com.tr/ly/uploads/images/2020/04/17/thumbs/800x531/31299.jpg',
      10,
      400,
      '$',
      'Istanbul',
      new TripOptions(true, true, true),
      3.25,
      []
    ),
    new OfferModel(
      '44',
      'https://idsb.tmgrup.com.tr/ly/uploads/images/2020/04/17/thumbs/800x531/31299.jpg',
      10,
      400,
      '$',
      'Istanbul',
      new TripOptions(true, true, true),
      3.25,
      []
    ),
  ];
  constructor() {}

  getOfferById(id: string): OfferModel {
    return this.offers.filter((f) => f.id == id)[0];
  }
}
