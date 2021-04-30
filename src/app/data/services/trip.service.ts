import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TripModel } from '../models/TripModel';
import { TripOptions } from '../models/variousModels';
import { EndPoints } from '../static/main-info';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class TripService extends BaseService<TripModel> {
  constructor(protected http: HttpClient) {
    super(http, EndPoints.trips, {});
    super.fetchAllData();
    // if (!environment.production) {
    //   this._initTestData();
    // }
  }

  async getOfferById(id: string): Promise<TripModel> {
    return await this.getById(id);
  }

  // _initTestData() {
  //   this.data = [
  //     {
  //       id: 1,
  //       currency: '$',
  //       duration: 40,
  //       name: 'toIstanbul',
  //       price: 500,
  //       trip_type: 'touristic',
  //       description: 'lorem',
  //       previewImage: {
  //         url:
  //           'https://media.gettyimages.com/photos/blue-mosque-in-istanbul-picture-id160193420?s=612x612',
  //       },
  //     },
  //     {
  //       id: 1,
  //       currency: '$',
  //       duration: 40,
  //       name: 'toIstanbul',
  //       price: 500,
  //       trip_type: 'touristic',
  //       description: 'lorem',
  //       previewImage: {
  //         url:
  //           'https://media.gettyimages.com/photos/blue-mosque-in-istanbul-picture-id160193420?s=612x612',
  //       },
  //     },
  //     {
  //       id: 1,
  //       currency: '$',
  //       duration: 40,
  //       name: 'toIstanbul',
  //       price: 500,
  //       trip_type: 'touristic',
  //       description: 'lorem',
  //       previewImage: {
  //         url:
  //           'https://media.gettyimages.com/photos/blue-mosque-in-istanbul-picture-id160193420?s=612x612',
  //       },
  //     },
  //     {
  //       id: 1,
  //       currency: '$',
  //       duration: 40,
  //       name: 'toIstanbul',
  //       price: 500,
  //       trip_type: 'touristic',
  //       description: 'lorem',
  //       previewImage: {
  //         url:
  //           'https://media.gettyimages.com/photos/blue-mosque-in-istanbul-picture-id160193420?s=612x612',
  //       },
  //     },
  //   ];
  //   this.data$.next(this.data);
  // }
}
