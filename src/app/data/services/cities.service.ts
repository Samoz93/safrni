import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CityObj } from '../models/TripModel';
import { EndPoints } from '../static/main-info';
import { BaseService } from './base.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CitiesService extends BaseService<CityObj> {
  constructor(protected http: HttpClient) {
    super(http, EndPoints.cities, {});
    //TODO create initData and put it in the main page ?

    super.fetchAllData();
    if (!environment.production) {
      this._initTestData();
    }
  }

  _initTestData() {
    this.data = [
      {
        id: 1,
        cityDescription: 'lorem',
        cityName: 'istanbul',
        description: 'lorem',
        published_at: new Date(),
        previewImage: {
          url:
            'https://media.gettyimages.com/photos/blue-mosque-in-istanbul-picture-id160193420?s=612x612',
        },
      },
      {
        id: 1,
        cityDescription: 'lorem',
        cityName: 'istanbul',
        description: 'lorem',
        published_at: new Date(),
        previewImage: {
          url:
            'https://media.gettyimages.com/photos/blue-mosque-in-istanbul-picture-id160193420?s=612x612',
        },
      },
      {
        id: 1,
        cityDescription: 'lorem',
        cityName: 'istanbul',
        description: 'lorem',
        published_at: new Date(),
        previewImage: {
          url:
            'https://media.gettyimages.com/photos/blue-mosque-in-istanbul-picture-id160193420?s=612x612',
        },
      },
      {
        id: 1,
        cityDescription: 'lorem',
        cityName: 'istanbul',
        description: 'lorem',
        published_at: new Date(),
        previewImage: {
          url:
            'https://media.gettyimages.com/photos/blue-mosque-in-istanbul-picture-id160193420?s=612x612',
        },
      },
    ];
    this.data$.next(this.data);
  }
}
