import { LocalResolver } from '@angular/compiler/src/compiler_util/expression_converter';
import { catchError, map } from 'rxjs/operators';
import Observable from 'zen-observable';
import { FeatureModel, FeatureModelAdapter } from '../models/FeatureModel';
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
