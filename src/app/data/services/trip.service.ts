import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TimelineModel, TimelineModelAdapter } from '../models/timelineModel';
import { TripModel, TripModelAdapter } from '../models/TripModel';
import { BaseService } from './base.service';
import { LocalService } from './local.service';
import { SaferniHttp } from './saferni.http.service';
import { GetTimelineGQL, GetTripGQL, TripsGQL } from './saferniGraphql.service';

@Injectable({
  providedIn: 'root',
})
export class TripService extends BaseService<TripModel> {
  constructor(
    private tripAdapter: TripModelAdapter,
    private timelineAdapter: TimelineModelAdapter,
    private tripsGql: TripsGQL,
    private timelineGql: GetTimelineGQL,
    private getTrip: GetTripGQL,
    private loc: LocalService
  ) {
    super();
    this.loc.isArabic$.subscribe(async (f) => {
      await this.init();
      console.log('refetching trips with arabic ?', f);
    });
  }

  get landingObservable$(): Observable<TripModel[]> {
    return this.data$.pipe(map((f) => f.slice(0, 7)));
  }
  async init(): Promise<TripModel[]> {
    this.setBusy(true);
    let trips = (
      await this.tripsGql
        .fetch({ limit: 30, locale: this.loc.locale })
        .toPromise()
    ).data.trips?.map((trip) => this.tripAdapter.adapt(trip));

    //for debug
    this.prepareData(new Array(10).fill(trips![0]));
    return this.data$.value;
  }
  async getTripById(id: string): Promise<TripModel> {
    let item = this.data$.value.find((x) => x.id === id);
    if (item) {
      return item;
    } else {
      this.setBusy(true);
      let trip = this.tripAdapter.adapt(
        (await this.getTrip.fetch({ id: id }).toPromise()).data.trip
      );
      this.setBusy(false);
      return trip;
    }
  }
  async getTimeline(id: string): Promise<TimelineModel[] | undefined> {
    this.setBusy(true);
    let data = await this.timelineGql.fetch({ id: id }).toPromise();
    this.setBusy(false);
    return data.data.timeline?.timelines?.map((tl) =>
      this.timelineAdapter.adapt(tl)
    );
  }
}
