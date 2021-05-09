import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TripModel, TripModelAdapter } from '../models/TripModel';
import { EndPoints, StaticInfo } from '../static/main-info';
import { BaseService } from './base.service';
import { SaferniHttp } from './saferni.http.service';

@Injectable({
  providedIn: 'root',
})
export class TripService extends BaseService<TripModel> {
  constructor(private http: SaferniHttp, private adapter: TripModelAdapter) {
    super();
  }
  async init() {
    let data = await this.http.get<any[]>(EndPoints.trips).toPromise();
    this.data = data.map((item) => this.adapter.adapt(item));
    this.prepareData(this.data);
  }
}
