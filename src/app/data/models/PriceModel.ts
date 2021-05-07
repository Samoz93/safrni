import { Adapter } from '../adapters/adapter';

export class PriceModel {
  constructor(
    public basePrice: number,
    public basePeopleCount: number,
    public discount: number,
    public currency: string,
    public extraAdultFee: number
  ) {}
}
export class PriceModelAdapter implements Adapter<PriceModel> {
  adapt(item: any): PriceModel {
    return new PriceModel(
      item.basePrice,
      item.basePeopleCount,
      item.discount,
      item.currency,
      item.extraAdultFee
    );
  }
}
