import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Adapter } from '../adapters/adapter';
import { StaticInfo } from '../static/main-info';

export class ImageModel {
  get url(): string {
    return this.isRemote
      ? `${environment.api}${this.realtiveUrl}`
      : this.realtiveUrl;
  }
  constructor(
    public id: string,
    public realtiveUrl: string,
    public isRemote = true,
    public width?: number,
    public height?: number,
    public formats?: ImageFormatsObject
  ) {}

  static defaultImage(): ImageModel {
    return new ImageModel('', StaticInfo.defaultImage, false);
  }
}
@Injectable({ providedIn: 'root' })
export class ImageModelAdapter implements Adapter<ImageModel> {
  adapt(item: any): ImageModel {
    if (!item) return new ImageModel('', StaticInfo.defaultImage, false);
    else
      return new ImageModel(item.id, item.url, true, item.width, item.height, {
        thumbnail: item.formats.thumbnail
          ? new ImageFormatAdapter().adapt(item.formats.thumbnail)
          : ImageFormatModel.fromRelativeUrl(item.url),
        large: item.formats.large
          ? new ImageFormatAdapter().adapt(item.formats.large)
          : ImageFormatModel.fromRelativeUrl(item.url),
        medium: item.formats.medium
          ? new ImageFormatAdapter().adapt(item.formats.medium)
          : ImageFormatModel.fromRelativeUrl(item.url),
        small: item.formats.small
          ? new ImageFormatAdapter().adapt(item.formats.small)
          : ImageFormatModel.fromRelativeUrl(item.url),
      });
  }
}

export type ImageFormatsObject = {
  thumbnail?: ImageFormatModel;
  large?: ImageFormatModel;
  medium?: ImageFormatModel;
  small?: ImageFormatModel;
};

export class ImageFormatModel {
  constructor(
    public relativeUrl: string,
    public name?: string,
    public width?: number,
    public height?: number,
    public size?: number
  ) {}

  get url(): string {
    return `${environment.api}${this.relativeUrl}`;
  }
  static fromRelativeUrl(rUrl: string): ImageFormatModel {
    return new ImageFormatModel(rUrl);
  }
}
class ImageFormatAdapter implements Adapter<ImageFormatModel> {
  adapt(item: any): ImageFormatModel {
    return new ImageFormatModel(
      item?.url,
      item?.name,
      item?.width,
      item?.height,
      item?.size
    );
  }
}
