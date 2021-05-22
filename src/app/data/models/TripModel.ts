import { Injectable } from '@angular/core';
import { Adapter } from '../adapters/adapter';
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
import { TimelineModel, TimelineModelAdapter } from './timelineModel';

export class TripModel {
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
    public timelineId: string,
    public basePrice: number,
    public discount: number,
    public basePeopleCount: number,
    public curreny: Enum_Trips_Currency,
    public localizations: LocalizationType[]
  ) {}
}

@Injectable({ providedIn: 'root' })
export class TripModelAdapter implements Adapter<TripModel> {
  adapt(item: any): TripModel {
    let features: FeatureModel[] = item.features.map((feature: any) =>
      new FeatureModelAdapter().adapt(feature)
    );

    return new TripModel(
      item.id,
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
      item.timeline.id,
      item.basePrice,
      item.discount,
      item.basePeopleCount,
      item.currency,
      new StrapiLocalizationsAdapter().adapt(item.localizations)
    );
  }
}
