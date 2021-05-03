import { LocationModel } from './LocationModel';

export class TimelineItemModel {
  constructor(
    public day: number,
    public description: string,
    public locations: LocationModel[]
  ) {}
}
