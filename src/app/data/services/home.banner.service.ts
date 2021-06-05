import { Injectable } from '@angular/core';
import { ImageModelAdapter } from '../models/ImageModel';
import { HomeCarousellGQL } from './saferniGraphql.service';

@Injectable({ providedIn: 'root' })
export class HomeBannerService {
  constructor(
    private homeBannerGql: HomeCarousellGQL,
    private imageAdapter: ImageModelAdapter
  ) {}

  images: string[] = [];
  async getCarouselImages() {
    if (this.images.length > 0) return this.images;
    let apolloData = await this.homeBannerGql.fetch().toPromise();

    const data = apolloData.data.homeBanner?.images?.map(
      (image) => this.imageAdapter.adapt(image).url
    );
    if (data) this.images.push(...data);
    return this.images;
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
