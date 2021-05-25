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
export class ImageModelAdapter implements Adapter<ImageModel> {
  adapt(item: any): ImageModel {
    if (!item) return new ImageModel('', StaticInfo.defaultImage, false);
    else
      return new ImageModel(item.id, item.url, true, item.width, item.height, {
        thumbnail: new ImageFormatAdapter().adapt(item.formats.thumbnail),
        large: new ImageFormatAdapter().adapt(item.formats.large),
        medium: new ImageFormatAdapter().adapt(item.formats.medium),
        small: new ImageFormatAdapter().adapt(item.formats.small),
      });
  }
}

export type ImageFormatsObject = {
  thumbnail: ImageFormatModel;
  large: ImageFormatModel;
  medium: ImageFormatModel;
  small: ImageFormatModel;
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
}
class ImageFormatAdapter implements Adapter<ImageFormatModel> {
  adapt(item: any): ImageFormatModel {
    return new ImageFormatModel(
      item.url,
      item.name,
      item.width,
      item.height,
      item.size
    );
  }
}
