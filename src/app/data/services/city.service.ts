import { Injectable } from '@angular/core';
import { CityModel, CityModelAdapter } from '../models/CityModel';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BaseService } from '../services/base.service';
import { CitiesGQL, GetLocalizedCityGQL } from './saferniGraphql.service';
import { LocalService } from './local.service';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDlgComponent } from 'src/app/common/widgets/error-dlg/error-dlg.component';
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
  get landingObservable$(): Observable<CityModel[]> {
    return this.data$.pipe(map((f) => f.slice(0, 7)));
  }
  async init(): Promise<CityModel[]> {
    const data = await this._doStuff<CityModel[]>(async () => {
      let data = await this.citiesGql
        .fetch({ locale: this.loc.locale })
        .toPromise();
      const models = data.data.cities?.map((city) => this.adapter.adapt(city))!;
      this.prepareData(models);
      return this.data;
    });
    return data!;
  }

  async getLocalizedCity(id: string, locale: string): Promise<CityModel> {
    const data = await this._doStuff<CityModel>(async () => {
      let data = await this.localizedCityService
        .fetch({ id: id, locale: locale })
        .toPromise();

      return this.adapter.adapt(data.data.cities![0])!;
    });
    return data!;
  }
}
