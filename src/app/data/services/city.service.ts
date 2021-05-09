import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EndPoints, LoadingState, StaticInfo } from '../static/main-info';
import { environment } from 'src/environments/environment';
import { CityModel, CityModelAdapter } from '../models/CityModel';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BaseService } from '../services/base.service';
import { SaferniHttp } from './saferni.http.service';

@Injectable({
  providedIn: 'root',
})
export class CityService extends BaseService<CityModel> {
  constructor(private http: SaferniHttp, private adapter: CityModelAdapter) {
    super();
  }

  async init(): Promise<any> {
    this.setBusy(true);
    let data = await this.http.get<any[]>(EndPoints.cities).toPromise();
    this.prepareData(data.map((item) => this.adapter.adapt(item)));
    this.setBusy(false);
  }
}
