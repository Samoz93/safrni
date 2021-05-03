import { Injectable } from '@angular/core';
import { Adapter } from '../adapters/adapter';
import { FeatureModel, FeatureModelAdapter } from './FeatureModel';
import { ImageModel, ImageModelAdapter } from './ImageModel';
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
    public features: FeatureModel[],
    public timelines: TimelineModel[]
  ) {}
}

@Injectable({ providedIn: 'root' })
export class TripModelAdapter implements Adapter<TripModel> {
  adapt(item: any): TripModel {
    let features: FeatureModel[] = item.features.map((feature: any) =>
      new FeatureModelAdapter().adapt(feature)
    );
    let timelines: TimelineModel[] = item.timelines.map((timeline: any) =>
      new TimelineModelAdapter().adapt(timeline)
    );
    return new TripModel(
      item.id,
      item.name,
      item.description,
      item.locale,
      item.duration,
      item.active,
      new ImageModelAdapter().adapt(item.previewImage),
      features,
      timelines
    );
  }
}
