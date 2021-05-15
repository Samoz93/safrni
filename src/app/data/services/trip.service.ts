import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { locale } from 'core-js';
import { Observable, throwError } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { TimelineModel, TimelineModelAdapter } from '../models/timelineModel';
import { TripModel, TripModelAdapter } from '../models/TripModel';
import { BaseService } from './base.service';
import { LocalService } from './local.service';
import { SaferniHttp } from './saferni.http.service';
import {
  GetLocalizedCityGQL,
  GetLocalizedTripGQL,
  GetTimelineGQL,
  GetTripGQL,
  TripsGQL,
} from './saferniGraphql.service';

@Injectable({
  providedIn: 'root',
})
export class TripService extends BaseService<TripModel> {
  constructor(
    private tripAdapter: TripModelAdapter,
    private timelineAdapter: TimelineModelAdapter,
    private tripsGql: TripsGQL,
    private timelineGql: GetTimelineGQL,
    private localizedTripService: GetLocalizedTripGQL,
    private getTrip: GetTripGQL,
    private loc: LocalService
  ) {
    super();
    // this.loc.isArabic$.subscribe(async (f) => {
    //   await this.init();
    //   console.log('refetching trips with arabic ?', f);
    // });
  }

  get landingObservable$(): Observable<TripModel[]> {
    return this.data$.pipe(map((f) => f.slice(0, 7)));
  }
  async init(): Promise<TripModel[]> {
    const data = await this._doStuff<TripModel[]>(async () => {
      return await this.queryTrips();
    });
    return data!;
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
      whereQuery._or = [
        { city: { id: query.cityId } },
        { city: { localizations: { id: query.cityId } } },
      ];
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
    const data = await this._doStuff<TripModel[]>(async () => {
      let resultTrips = (
        await this.tripsGql
          .fetch({
            limit: query?.limit ?? 10,
            locale: query?.locale ?? this.loc.locale,
            where: whereQuery,
          })
          .toPromise()
      ).data.trips?.map((trip) => this.tripAdapter.adapt(trip))!;

      return resultTrips;
    });
    return data!;
  }
  async getRelatedTrips(to: TripModel): Promise<TripModel[]> {
    let result = await this.queryTrips({ limit: 8, cityId: to.city.id });

    return [...[...result!, ...result!, ...result!]];
  }
  async getTripById(id: string): Promise<TripModel> {
    const data = await this._doStuff<TripModel>(async () => {
      let trip = this.tripAdapter.adapt(
        (await this.getTrip.fetch({ id: id }).toPromise()).data.trip
      );
      return trip;
    });
    return data!;
  }

  async getTimeline(id: string): Promise<TimelineModel[]> {
    const x = await this._doStuff<TimelineModel[]>(async () => {
      let data = await this.timelineGql.fetch({ id: id }).toPromise();
      return data.data.timeline?.timelines?.map((tl) =>
        this.timelineAdapter.adapt(tl)
      );
    });
    return x!;
  }

  async getLocalizedTrip(id: string): Promise<TripModel> {
    const x = await this._doStuff<TripModel>(async () => {
      let data = await this.localizedTripService
        .fetch({ id: id, locale: this.loc.locale })
        .toPromise();

      return this.tripAdapter.adapt(data.data.trips![0]);
    });
    return x!;
  }
}
