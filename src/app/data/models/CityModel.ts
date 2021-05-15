import { Injectable } from '@angular/core';
import { Adapter } from '../adapters/adapter';
import { ImageModel, ImageModelAdapter } from './ImageModel';
import {
  LocalizationType,
  StrapiLocalizationsAdapter,
} from './localization.type';

export class CityModel {
  constructor(
    public id: string,
    public name: string,
    public description?: string,
    public locale?: string,
    public image?: ImageModel,
    public localizations?: LocalizationType[]
  ) {}
}

@Injectable({ providedIn: 'root' })
export class CityModelAdapter implements Adapter<CityModel> {
  adapt(item: any): CityModel {
    return new CityModel(
      item.id,
      item.name,
      item.description,
      item.locale,
      new ImageModelAdapter().adapt(item?.image),
      new StrapiLocalizationsAdapter().adapt(item.localizations)
    );
  }
}
