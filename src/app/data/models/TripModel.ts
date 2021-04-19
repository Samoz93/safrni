import { LocationModel } from './LocationModel';
import { TripOptions } from './variousModels';

export class TripModel {
  constructor(
    public id: string,
    public tripDesc: string,
    public tripName: string,
    public image: string,
    public duration: number,
    public city: string,
    public price: number,
    public currency: string,
    public options: TripOptions,
    public rating: number,
    public comments: string[],
    public locations: LocationModel[] = []
  ) {}
}
