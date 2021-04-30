import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DevData, EndPoints } from '../static/main-info';
import { BaseService } from './base.service';
import { environment } from 'src/environments/environment';
import { City } from '../models/CitiesModel';

@Injectable({
  providedIn: 'root',
})
export class CitiesService extends BaseService<City> {
  constructor(protected http: HttpClient) {
    super(http, EndPoints.cities, {});
    //TODO create initData and put it in the main page ?

    super.fetchAllData();
    // if (DevData.isDev && !environment.production) {
    //   this._initTestData();
    // }
  }
}
