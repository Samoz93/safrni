import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CityObj } from '../models/TripModel';
import { EndPoints } from '../static/main-info';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class CitiesService extends BaseService<CityObj> {
  constructor(protected http: HttpClient) {
    super(http, EndPoints.cities, {});
    //TODO create initData and put it in the main page ?

    super.fetchAllData();
  }
}
