import { ImageModel } from './ImageModel';

export interface City {
  _id: string;
  name: string;
  description?: string;
  published_at?: Date;
  createdAt?: Date;
  updatedAt?: Date;
  __v?: number;
  image: ImageModel;
  locations?: any[];
  id?: string;
}
