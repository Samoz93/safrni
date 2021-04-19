import { Injectable } from '@angular/core';
import { TripModel } from '../models/TripModel';
import { TripOptions } from '../models/variousModels';

@Injectable({
  providedIn: 'root',
})
export class TripService {
  offers = [
    new TripModel(
      '11',
      'test',
      'test2',
      'https://idsb.tmgrup.com.tr/ly/uploads/images/2020/04/17/thumbs/800x531/31299.jpg',
      10,
      'Istanbul',
      400,
      '$',
      new TripOptions(true, true, true),
      3.25,
      [],
      []
    ),
    new TripModel(
      '11',
      'test',
      'test2',
      'https://idsb.tmgrup.com.tr/ly/uploads/images/2020/04/17/thumbs/800x531/31299.jpg',
      10,
      'Istanbul',
      400,
      '$',
      new TripOptions(true, true, true),
      3.25,
      [],
      []
    ),
    new TripModel(
      '11',
      'test',
      'test2',
      'https://idsb.tmgrup.com.tr/ly/uploads/images/2020/04/17/thumbs/800x531/31299.jpg',
      10,
      'Istanbul',
      400,
      '$',
      new TripOptions(true, true, true),
      3.25,
      [],
      []
    ),
  ];
  constructor() {}

  getOfferById(id: string): TripModel {
    return this.offers.filter((f) => f.id == id)[0];
  }
}
