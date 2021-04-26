import { LocationModel } from './LocationModel';

export class TimelineItemModel {
  day: number;
  locations: LocationModel[];

  constructor(day: number, locations: LocationModel[]) {
    this.day = day;
    this.locations = locations;
  }
}
