import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';
import urljoin from 'url-join';
import { FilterOptionsModel } from '../models/filterOptionModlel';
import { LocationModel, LocationModelAdapter } from '../models/LocationModel';
import { TripModel, TripModelAdapter } from '../models/TripModel';
import { BaseService } from './base.service';
import { ErrorService } from './error.service';
import { LocalService } from './local.service';
import {
  Enum_Trips_Trip_Type,
  GetLocalizedTripGQL,
  GetLocationsGQL,
  GetTripGQL,
} from './saferniGraphql.service';

@Injectable({
  providedIn: 'root',
})
export class TripService extends BaseService<TripModel> {
  constructor(
    private tripAdapter: TripModelAdapter,
    private locationAdapter: LocationModelAdapter,
    private locationsGql: GetLocationsGQL,
    private localizedTripService: GetLocalizedTripGQL,
    private getTrip: GetTripGQL,
    private loc: LocalService,
    errSer: ErrorService,
    private http: HttpClient
  ) {
    super(errSer);
  }

  async init(): Promise<TripModel[]> {
    if (this.data.length > 0) return this.data;
    const data = await this.queryTrips();
    this.prepareData(data);
    return data;
  }

  async queryTrips(
    query: FilterOptionsModel = {
      maxPrice: 0,
      minPrice: 0,
      tripType: Enum_Trips_Trip_Type.Touristic,
      locale: this.loc.locale,
      limit: 20,
    },
    offset: number = 0
  ): Promise<TripModel[]> {
    let queryParams: Params = { ...query, offset };
    //TODO add it later
    delete queryParams['date'];
    if (!query.cities || query.cities.length < 1) {
      delete queryParams['cities'];
    }
    if (!query.hotel) {
      delete queryParams['hotel'];
    }

    if (!query.travelType) {
      delete queryParams['travelType'];
    }
    if (!query.tripType) {
      delete queryParams['tripType'];
    }
    if (!query.minPrice || query.minPrice <= 0) {
      delete queryParams['minPrice'];
    }
    if (!query.maxPrice || query.maxPrice <= 0) {
      delete queryParams['maxPrice'];
    }

    if (!query.search) {
      delete queryParams['search'];
    }
    if (!query.locale) {
      queryParams = {
        ...queryParams,
        locale: this.loc.locale,
      };
    }
    if (!query.limit) {
      queryParams = {
        ...queryParams,
        limit: 20,
      };
    }

    const data = await this._doStuff<TripModel[]>(async () => {
      const baseUrl = urljoin(environment.api, 'queryTrips');

      return await this.http
        .get<any[]>(baseUrl, {
          params: queryParams,
        })
        .pipe(
          map((f) => {
            const data = f.map((g: any) => this.tripAdapter.adapt(g));
            return data;
          })
        )
        .toPromise();
    });
    return data!;
  }
  async getRelatedTrips(to: TripModel): Promise<TripModel[]> {
    let cityIds: string[] = [];
    to.plan.forEach((p) => {
      if (p.dayLocations) {
        p.dayLocations.forEach((l) => {
          cityIds.push(l.cityId);
        });
      }
    });
    let result = await this.queryTrips({
      limit: 8,
      maxPrice: 0,
      minPrice: 0,
      travelType: to.travelType,
      tripType: to.tripType,
      cities: cityIds,
    });

    return result!;
  }
  async getTripById(id: string): Promise<TripModel> {
    let trip = this.tripAdapter.adapt(
      (await this.getTrip.fetch({ id: id }).toPromise()).data.trip
    );
    return trip;
  }
  _getSavedTrip(id: string) {
    const saved = this.data.filter((x) => x.id == id);
    if (saved && saved.length > 0) {
      return saved[0];
    }
    return null;
  }
  async getLocalizedTrip(id: string): Promise<TripModel> {
    const saved = this._getSavedTrip(id);
    if (saved) return saved;
    let data = await this.localizedTripService
      .fetch({ id: id, locale: this.loc.locale })
      .toPromise();
    const models = this.tripAdapter.adapt(data.data.trips![0]);
    this._cachtrip([models]);
    return models;
  }
  _cachtrip(tripModels?: TripModel[]) {
    if (!tripModels) return;
    const newTrips = tripModels.filter(
      (f) => !this.data.some((x) => x.id == f.id)
    );
    this.data.push(...newTrips);
  }
  async getLocations(ids: string[]): Promise<LocationModel[] | undefined> {
    const result = await this._doStuff<LocationModel[]>(async () => {
      let apolloResponse = await this.locationsGql
        .fetch({ locale: this.loc.locale, ids: ids })
        .toPromise();
      return apolloResponse.data.locations?.map((l: any) =>
        this.locationAdapter.adapt(l)
      );
    });
    return result;
  }
}
