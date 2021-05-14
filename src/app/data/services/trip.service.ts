import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { locale } from 'core-js';
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

    this.prepareData(await this.queryTrips());
    return this.data$.value;
  }
  async queryTrips(
    query: {
      limit?: number;
      cityId?: String;
      locale?: string;
      priceRange?: { minPrice: number; maxPrice: number };
      text?: string;
      date?: number;
    } = {
      limit: 10,
      locale: this.loc.locale,
    }
  ): Promise<TripModel[]> {
    let whereQuery: any = {};
    if (query.cityId) {
      whereQuery.city = { id: query.cityId };
    }
    if (query.priceRange) {
      whereQuery = {
        ...whereQuery,
        basePrice_gt: query.priceRange.minPrice,
        basePrice_lt: query.priceRange.maxPrice,
      };
    }
    if (query.text) {
      whereQuery = {
        ...whereQuery,
        name_contains: query.text,
      };
    }
    console.log(whereQuery);

    let resultTrips = (
      await this.tripsGql
        .fetch({
          limit: query?.limit ?? 10,
          locale: query?.locale ?? 'en',
          where: whereQuery,
        })
        .toPromise()
    ).data.trips?.map((trip) => this.tripAdapter.adapt(trip))!;

    return new Array(10).fill(resultTrips[0]);
  }
  async getRelatedTrips(to: TripModel): Promise<TripModel[]> {
    let result = await this.queryTrips({ limit: 8, cityId: to.city.id });

    return [
      ...[...result, ...result, ...result],
      ...[...result, ...result, ...result],
    ];
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
