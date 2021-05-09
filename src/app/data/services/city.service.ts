import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EndPoints, LoadingState, StaticInfo } from '../static/main-info';
import { environment } from 'src/environments/environment';
import { CityModel, CityModelAdapter } from '../models/CityModel';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BaseService } from '../services/base.service';
import { SaferniHttp } from './saferni.http.service';
import { CitiesGQL } from './saferniGraphql.service';

@Injectable({
  providedIn: 'root',
})
export class CityService extends BaseService<CityModel> {
  constructor(private adapter: CityModelAdapter, private citiesGql: CitiesGQL) {
    super();
  }

  async init(): Promise<CityModel[]> {
    this.setBusy(true);
    let data = await this.citiesGql.fetch({ limit: 10 }).toPromise();
    const models = data.data.cities?.map((city) => this.adapter.adapt(city))!;
    this.prepareData(models);
    return this.data;
  }
}
