import { Injectable } from '@angular/core';
import { Adapter } from '../adapters/adapter';
import { priceData } from '../pipes/price-caculator.pipe';
import {
  Enum_Trips_Currency,
  Enum_Trips_Traveltype,
  Enum_Trips_Trip_Type,
} from '../services/saferniGraphql.service';
import { CityModel } from './CityModel';
import { FeatureModel, FeatureModelAdapter } from './FeatureModel';
import { ImageModel, ImageModelAdapter } from './ImageModel';
import {
  LocalizationType,
  StrapiLocalizationsAdapter,
} from './localization.type';

export class TripModel {
  public get allLocationsIds(): string[] {
    let ids: string[] = [];
    this.plan.forEach((plan) => {
      ids.push(...plan.dayLocations.map((loc) => loc.locationId));
    });

    return ids;
  }
  get priceData(): priceData {
    return {
      basePrice: this.basePrice,
      currency: this.curreny,
    };
  }
  constructor(
    public id: string,
    public name: string,
    public description: string,
    public locale: string,
    public duration: number,
    public tripType: Enum_Trips_Trip_Type,
    public travelType: Enum_Trips_Traveltype,
    public active: boolean,
    public previewImage: ImageModel,
    public city: CityModel,
    public features: FeatureModel[],
    public plan: TripDayPlan[],
    public basePrice: number,
    public discount: number,
    public basePeopleCount: number,
    public curreny: Enum_Trips_Currency,
    public localizations: LocalizationType[],
    public hotel?: Hotel
  ) {}
}

@Injectable({ providedIn: 'root' })
export class TripModelAdapter implements Adapter<TripModel> {
  adapt(item: any): TripModel {
    let features: FeatureModel[] = item.features.map((feature: any) =>
      new FeatureModelAdapter().adapt(feature)
    );
    let plan: TripDayPlan[] = item.plan.map((planItem: any) =>
      new TripDayPlanAdapter().adapt(planItem)
    );

    return new TripModel(
      item?.id,
      item.name,
      item.description,
      item.locale,
      item.duration,
      item.trip_type,
      item.travelType,
      item.active,
      new ImageModelAdapter().adapt(item.previewImage),
      item.city,
      features,
      plan,
      item.basePrice,
      item.discount,
      item.basePeopleCount,
      item.currency,
      new StrapiLocalizationsAdapter().adapt(item.localizations),
      new HotelAdapter().adapt(item.hotel)
    );
  }
}

export class TripDayPlan {
  constructor(public day: number, public dayLocations: PlanLocation[]) {}
}
export class TripDayPlanAdapter implements Adapter<TripDayPlan> {
  adapt(item: any): TripDayPlan {
    return new TripDayPlan(
      item.day,
      item.locations.map((l: any) => {
        //TODO some of the locations has no cities
        return new PlanLocation(l.id, l?.city?.id, l.name);
      })
    );
  }
}
export class PlanLocation {
  constructor(
    public locationId: string,
    public cityId: string,
    public locationName: string
  ) {}
}
export class Hotel {
  constructor(
    public id: string,
    public name: string,
    public stars: number,
    public url: string
  ) {}
}
export class HotelAdapter implements Adapter<Hotel> {
  adapt(item: any): Hotel | undefined {
    if (!item) return undefined;
    else return new Hotel(item.id, item.name, item.stars, item.url);
  }
}
