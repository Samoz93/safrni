import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TimelineModel, TimelineModelAdapter } from '../models/timelineModel';
import { TripModel, TripModelAdapter } from '../models/TripModel';
import { EndPoints, StaticInfo } from '../static/main-info';
import { BaseService } from './base.service';
import { SaferniHttp } from './saferni.http.service';
import { GetTimelineGQL, GetTripGQL, TripsGQL } from './saferniGraphql.service';

@Injectable({
  providedIn: 'root',
})
export class TripService extends BaseService<TripModel> {
  constructor(
    private http: SaferniHttp,
    private tripAdapter: TripModelAdapter,
    private timelineAdapter: TimelineModelAdapter,
    private tripsGql: TripsGQL,
    private timelineGql: GetTimelineGQL,
    private getTrip: GetTripGQL
  ) {
    super();
  }
  async init() {
    this.setBusy(true);

    let trips = (
      await this.tripsGql.fetch({ limit: 30 }).toPromise()
    ).data.trips?.map((trip) => this.tripAdapter.adapt(trip));

    //for debug

    this.data$.next(new Array(10).fill(trips![0]));

    this.setBusy(false);
  }
  async getTripById(id: string): Promise<TripModel> {
    let item = this.data$.value.find((x) => x.id === id);
    if (item) {
      return item;
    } else {
      return this.tripAdapter.adapt(
        (await this.getTrip.fetch({ id: id }).toPromise()).data.trip
      );
    }
  }
  async getTimeline(id: string): Promise<TimelineModel[] | undefined> {
    let data = await this.timelineGql.fetch({ id: id }).toPromise();

    return data.data.timeline?.timelines?.map((tl) =>
      this.timelineAdapter.adapt(tl)
    );
  }
}
