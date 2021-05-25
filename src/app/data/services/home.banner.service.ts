import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ImageModel, ImageModelAdapter } from '../models/ImageModel';
import { HomeCarousellGQL } from './saferniGraphql.service';

@Injectable({ providedIn: 'root' })
export class HomeBannerService {
  constructor(
    private homeBannerGql: HomeCarousellGQL,
    private imageAdapter: ImageModelAdapter
  ) {}

  async getCarouselImages() {
    let apolloData = await this.homeBannerGql.fetch().toPromise();

    return apolloData.data.homeBanner?.images?.map(
      (image) => this.imageAdapter.adapt(image).url
    );

    // return apolloData;
    // return this.homeBannerGql.fetch().pipe(
    //   map((apolloRes) => {
    //     let imageModels = apolloRes.data.homeBanner?.images?.map((image: any) =>
    //       this.imageAdapter.adapt(image)
    //     );
    //     if (!imageModels) imageModels = [ImageModel.defaultImage()];
    //     if (screenWidth > 800) return imageModels.map((model) => model.url);
    //     else
    //       return imageModels.map((model) => {
    //         if (model.formats) {
    //           return model.formats.medium.url;
    //         } else return model.url;
    //       });
    //   }),
    //   tap((data) => console.log(data))
    // );
  }
}
