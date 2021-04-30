import { ImageModel } from './ImageModel';
import { City } from './CitiesModel';

export interface TripModel {
  active: boolean;
  trip_type: string;
  currency: string;
  features: Feature[];
  localizations: any[];
  _id: string;
  name: string;
  duration: number;
  description: string;
  price: Price;
  locale: string;
  published_at: Date;
  timelines: Timeline[];
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  previewImage: ImageModel;
  city: City;
  reviews: any[];
  id: string;
}

export interface Feature {
  _id: string;
  name: string;
  description: string;
  published_at: Date;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  image?: ImageModel;
  id: string;
}

export interface Price {
  currency: string;
  extraAdultFee: number;
  extraChildFee: number;
  discount: number;
  _id: string;
  basePrice: number;
  baseAdultCount: number;
  baseChildCount: string;
  __v: number;
  id: string;
}

export interface Timeline {
  _id: string;
  day: number;
  description: string;
  __v: number;
  location: Location;
  id: string;
}

export interface Location {
  images: any[];
  localizations: Localization[];
  _id: string;
  name: string;
  description: string;
  locale: string;
  published_at: Date;
  coordinate: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  city: string;
  id: string;
}

export interface Localization {
  id: ID;
}

export interface ID {
  type: string;
  data: number[];
}
