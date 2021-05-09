import { Adapter } from '../adapters/adapter';
import { LocationModel, LocationModelAdapter } from './LocationModel';

export class TimelineModel {
  constructor(
    public id: string,
    public day: number,
    public description: string,
    public locations: LocationModel[]
  ) {}
}
export class TimelineModelAdapter implements Adapter<TimelineModel> {
  adapt(item: any): TimelineModel {
    let locations: LocationModel[] = item?.locations?.map((location: any) =>
      new LocationModelAdapter().adapt(location)
    );

    return new TimelineModel(item.id, item.day, item.description, locations);
  }
}
