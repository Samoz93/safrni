import { map } from 'rxjs/operators';
import { FeatureModelAdapter } from '../models/FeatureModel';
import { LocalService } from './local.service';
import { FeaturesGQL } from './saferniGraphql.service';

export class FeaturesService {
  constructor(
    private featuresQgl: FeaturesGQL,
    private localeService: LocalService,
    private adapter: FeatureModelAdapter
  ) {}

  getAllFeatures() {
    return this.featuresQgl
      .fetch({ locale: this.localeService.locale })
      .pipe(
        map((response) =>
          response.data.features?.map((f) => this.adapter.adapt(f))
        )
      );
  }
}
