import { Injectable } from '@angular/core';
import { CityModel, CityModelAdapter } from '../models/CityModel';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BaseService } from '../services/base.service';
import { CitiesGQL, GetLocalizedCityGQL } from './saferniGraphql.service';
import { LocalService } from './local.service';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root',
})
export class CityService extends BaseService<CityModel> {
  constructor(
    private adapter: CityModelAdapter,
    private citiesGql: CitiesGQL,
    private loc: LocalService,
    private localizedCityService: GetLocalizedCityGQL,
    errSer: ErrorService
  ) {
    super(errSer);
  }
  async init(): Promise<CityModel[]> {
    if (this.data.length > 0) {
      return this.data;
    }
    let data = await this.citiesGql
      .fetch({ locale: this.loc.locale })
      .toPromise();
    const models = data.data.cities?.map((city) => this.adapter.adapt(city))!;
    this.prepareData(models);
    return this.data;
  }

  async getLocalizedCity(id: string, locale: string): Promise<CityModel> {
    let data = await this.localizedCityService
      .fetch({ id: id, locale: locale })
      .toPromise();

    return this.adapter.adapt(data.data.cities![0])!;
  }
}
