import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { TripModel, TripModelAdapter } from '../models/TripModel';
import { TripOptions } from '../models/variousModels';
import { EndPoints, StaticInfo } from '../static/main-info';

@Injectable({
  providedIn: 'root',
})
export class TripService {
  constructor(private http: HttpClient, private adapter: TripModelAdapter) {}
  gettrips(): Observable<TripModel[]> {
    return this.http
      .get<any[]>(`${StaticInfo.baseUrl}/cities`)
      .pipe(map((data: any[]) => data.map((item) => this.adapter.adapt(item))));
  }
}
