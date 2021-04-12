import { TripOptions } from './variousModels';

export class OfferModel {
  constructor(
    public id: string,
    public image: string,
    public duration: number,
    public price: number,
    public currency: string,
    public city: string,
    public options: TripOptions,
    public rating: number,
    public comments: string[]
  ) {}
}
