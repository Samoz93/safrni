import { Injectable } from '@angular/core';
import { Adapter } from '../adapters/adapter';
import { CityModel } from './CityModel';
import { FeatureModel, FeatureModelAdapter } from './FeatureModel';
import { ImageModel, ImageModelAdapter } from './ImageModel';
import { PriceModel, PriceModelAdapter } from './PriceModel';
import { TimelineModel, TimelineModelAdapter } from './timelineModel';

export class TripModel {
  constructor(
    public id: string,
    public name: string,
    public description: string,
    public locale: string,
    public duration: number,
    public active: boolean,
    public previewImage: ImageModel,
    public city: CityModel,
    public features: FeatureModel[],
    public timelineId: string,
    public price: PriceModel
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
      item.active,
      new ImageModelAdapter().adapt(item.previewImage),
      item.city,
      features,
      item.timeline.id,
      new PriceModelAdapter().adapt(item.price)
    );
  }
}
