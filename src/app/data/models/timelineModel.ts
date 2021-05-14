import { Injectable } from '@angular/core';
import { Adapter } from '../adapters/adapter';
import {
  LocalizationType,
  StrapiLocalizationsAdapter,
} from './localization.type';
import { LocationModel, LocationModelAdapter } from './LocationModel';

export class TimelineModel {
  constructor(
    public id: string,
    public day: number,
    public description: string,
    public locations: LocationModel[],
    public localizations: LocalizationType[]
  ) {}
}
@Injectable({ providedIn: 'root' })
export class TimelineModelAdapter implements Adapter<TimelineModel> {
  adapt(item: any): TimelineModel {
    let locations: LocationModel[] = item?.locations?.map((location: any) =>
      new LocationModelAdapter().adapt(location)
    );

    return new TimelineModel(
      item.id,
      item.day,
      item.description,
      locations,
      new StrapiLocalizationsAdapter().adapt(item.localizations)
    );
  }
}
