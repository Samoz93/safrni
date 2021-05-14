import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EndPoints, LoadingState, StaticInfo } from '../static/main-info';
import { environment } from 'src/environments/environment';
import { CityModel, CityModelAdapter } from '../models/CityModel';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BaseService } from '../services/base.service';
import { SaferniHttp } from './saferni.http.service';
import { CitiesGQL, City } from './saferniGraphql.service';
import { LocalService } from './local.service';

@Injectable({
  providedIn: 'root',
})
export class CityService extends BaseService<CityModel> {
  constructor(
    private adapter: CityModelAdapter,
    private citiesGql: CitiesGQL,
    private loc: LocalService
  ) {
    super();
  }
  get landingObservable$(): Observable<CityModel[]> {
    return this.data$.pipe(map((f) => f.slice(0, 7)));
  }
  async init(): Promise<CityModel[]> {
    this.setBusy(true);
    let data = await this.citiesGql
      .fetch({ limit: 10, locale: this.loc.locale })
      .toPromise();
    const models = data.data.cities?.map((city) => this.adapter.adapt(city))!;
    this.prepareData(models);
    return this.data;
  }
}
