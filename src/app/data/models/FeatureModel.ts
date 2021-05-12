import { Adapter } from '../adapters/adapter';

export class FeatureModel {
  constructor(
    public name: string,
    public info: string,
    public included: boolean
  ) {}
}
export class FeatureModelAdapter implements Adapter<FeatureModel> {
  adapt(item: any): FeatureModel {
    return new FeatureModel(
      item.feature.name,
      item.feature.info,
      item.included
    );
  }
}
