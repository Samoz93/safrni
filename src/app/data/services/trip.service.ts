import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TripModel, TripModelAdapter } from '../models/TripModel';
import { EndPoints, StaticInfo } from '../static/main-info';

@Injectable({
  providedIn: 'root',
})
export class TripService {
  constructor(private http: HttpClient, private adapter: TripModelAdapter) {}
  getTrips(): Observable<TripModel[]> {
    return this.http
      .get<any[]>(`${StaticInfo.baseUrl}/trips`)
      .pipe(map((data: any[]) => data.map((item) => this.adapter.adapt(item))));
  }
}
