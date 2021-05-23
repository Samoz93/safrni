import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { LocationModel, LocationModelAdapter } from '../models/LocationModel';
import { TripModel, TripModelAdapter } from '../models/TripModel';
import { BaseService } from './base.service';
import { ErrorService } from './error.service';
import { LocalService } from './local.service';
import {
  GetLocalizedCityGQL,
  GetLocalizedTripGQL,
  GetLocationsGQL,
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
    private locationAdapter: LocationModelAdapter,
    private tripsGql: TripsGQL,
    private locationsGql: GetLocationsGQL,
    private localizedTripService: GetLocalizedTripGQL,
    private getTrip: GetTripGQL,
    private loc: LocalService,
    errSer: ErrorService
  ) {
    super(errSer);
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
      accomidation?: boolean;
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
    if (query.accomidation != null) {
      whereQuery = {
        ...whereQuery,
        hotels: { id_null: !query.accomidation },
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

  async getLocalizedTrip(id: string): Promise<TripModel> {
    const x = await this._doStuff<TripModel>(async () => {
      let data = await this.localizedTripService
        .fetch({ id: id, locale: this.loc.locale })
        .toPromise();

      return this.tripAdapter.adapt(data.data.trips![0]);
    });
    return x!;
  }
  // async getTripLocations(tripId:string) : Promise<LocationModel[] | undefined>
  // {
  //   return this.getLocations()
  // }
  async getLocations(ids: string[]): Promise<LocationModel[] | undefined> {
    // const result = await this._doStuff<LocationModel[]>(async () => {
    //   let apolloResponse = await this.locationsGql
    //     .fetch({ locale: this.loc.locale, ids: ids })
    //     .toPromise();
    //   return apolloResponse.data.locations?.map((l: any) =>
    //     this.locationAdapter.adapt(l)
    //   );
    // });
    // return result;
    let apolloResponse = await this.locationsGql
      .fetch({ locale: this.loc.locale, ids: ids })
      .toPromise();
    console.log(apolloResponse);
    return apolloResponse.data.locations?.map((l: any) =>
      this.locationAdapter.adapt(l)
    );
  }
}
