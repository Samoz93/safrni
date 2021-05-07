import { Adapter } from '../adapters/adapter';

export class ImageModel {
  constructor(
    public id: string,
    public width: number,
    public height: number,
    public realtiveUrl: string
  ) // public formats: ImageFormatsObject
  {}
}
export class ImageModelAdapter implements Adapter<ImageModel> {
  adapt(item: any): ImageModel {
    return new ImageModel(item.id, item.width, item.height, item.url);
  }
}

// {
//   thumbnail: new ImageFormatAdapter().adapt(item.formats.thumbnail),
//   large: new ImageFormatAdapter().adapt(item.formats.large),
//   medium: new ImageFormatAdapter().adapt(item.formats.medium),
//   small: new ImageFormatAdapter().adapt(item.formats.small),
// }
export type ImageFormatsObject = {
  thumbnail: ImageFormatModel;
  large: ImageFormatModel;
  medium: ImageFormatModel;
  small: ImageFormatModel;
};

export class ImageFormatModel {
  constructor(
    public name: string,
    public width: number,
    public height: number,
    public size: number,
    public relativeUrl: string
  ) {}
}
class ImageFormatAdapter implements Adapter<ImageFormatModel> {
  adapt(item: any): ImageFormatModel {
    return new ImageFormatModel(
      item.name,
      item.width,
      item.height,
      item.size,
      item.url
    );
  }
}
