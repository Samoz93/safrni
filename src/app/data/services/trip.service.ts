import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CityObj, TripModel } from '../models/TripModel';
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
  }

  async getOfferById(id: string): Promise<TripModel> {
    return await this.getById(id);
  }
}
