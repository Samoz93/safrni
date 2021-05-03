import { Injectable } from '@angular/core';
import { Adapter } from '../adapters/adapter';
import { CityModel, CityModelAdapter } from './CityModel';
import { ImageModel, ImageModelAdapter } from './ImageModel';

export class LocationModel {
  constructor(
    public id: string,
    public images: ImageModel[],
    public name: string,
    public desc: string,
    public locale: string,
    public geo: Coordinates,
    public city: CityModel
  ) {}
}
export type Coordinates = { latitude: number; longitude: number };

@Injectable({ providedIn: 'root' })
export class CourseAdapter implements Adapter<LocationModel> {
  adapt(item: any): LocationModel {
    let images: ImageModel[] = item.images.map((imageObject: any) => {
      return new ImageModelAdapter().adapt(imageObject);
    });
    return new LocationModel(
      item.id,
      images,
      item.name,
      item.description,
      item.locale,
      {
        latitude: item.coordinate.latitude,
        longitude: item.coordinate.longitude,
      },
      new CityModelAdapter().adapt(item.city)
    );
  }
}
