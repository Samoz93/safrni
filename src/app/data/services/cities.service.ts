import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DevData, EndPoints, StaticInfo } from '../static/main-info';
import { environment } from 'src/environments/environment';
import { CityModel, CityModelAdapter } from '../models/CityModel';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CitiesService {
  constructor(
    private http: HttpClient,
    private cityAdapter: CityModelAdapter
  ) {}

  getCities(): Observable<CityModel[]> {
    return this.http
      .get<any[]>(`${StaticInfo.baseUrl}/cities`)
      .pipe(
        map((data: any[]) => data.map((item) => this.cityAdapter.adapt(item)))
      );
  }
}
