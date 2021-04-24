export interface TripModel {
  id: number;
  name: string;
  trip_type: string;
  published_at?: Date;
  updated_at?: Date;
  created_at?: Date;
  description: string;
  duration: number;
  currency: string;
  provider?: ProviderClass;
  price: number;
  cityObj?: CityObj;
  timelines?: Timeline[];
  previewImage?: PreviewImage;
  reviews?: Review[];
  features?: Feature[];
}

export interface CityObj {
  id: number;
  name?: string;
  description: string;
  published_at: Date;
  created_at?: Date;
  updated_at?: Date;
  cityName: string;
  cityDescription: string;
  previewImage?: PreviewImage;
}

export interface PreviewImage {
  id?: number;
  name?: string;
  alternativeText?: string;
  caption?: string;
  width?: number;
  height?: number;
  formats?: Formats;
  hash?: Hash;
  ext?: EXT;
  mime?: MIME;
  size?: number;
  url: string;
  previewUrl?: any;
  provider?: ProviderEnum;
  provider_metadata?: any;
  created_at?: Date;
  updated_at?: Date;
}

export enum EXT {
  Jpg = '.jpg',
}

export interface Formats {
  small: Large;
  medium: Large;
  thumbnail: Large;
  large?: Large;
}

export interface Large {
  ext: EXT;
  url: string;
  hash: string;
  mime: MIME;
  name: string;
  path: any;
  size: number;
  width: number;
  height: number;
}

export enum MIME {
  ImageJPEG = 'image/jpeg',
}

export enum Hash {
  ChickenWingItC7F4E1F550 = 'chicken_wing_it_c7f4e1f550',
  IstanbulC4Cee35715 = 'istanbul_c4cee35715',
  IstanbulTurkeyF24192659D = 'Istanbul_Turkey_f24192659d',
}

export enum Name {
  ChickenWingItJpg = 'chicken_wing_it.jpg',
  IstanbulJpg = 'istanbul.jpg',
  IstanbulTurkeyJpg = 'Istanbul-Turkey.jpg',
}

export enum ProviderEnum {
  Local = 'local',
}

export enum URL {
  UploadsChickenWingItC7F4E1F550Jpg = '/uploads/chicken_wing_it_c7f4e1f550.jpg',
  UploadsIstanbulC4Cee35715Jpg = '/uploads/istanbul_c4cee35715.jpg',
  UploadsIstanbulTurkeyF24192659DJpg = '/uploads/Istanbul_Turkey_f24192659d.jpg',
}

export interface Feature {
  id: number;
  name: string;
  description: string;
  link: null;
  published_at: Date;
  created_at: Date;
  updated_at: Date;
  icon: PreviewImage;
}

export interface ProviderClass {
  id: number;
  name: string;
  address: string;
  email: string;
  phone: string;
  published_at: Date;
  created_at: Date;
  updated_at: Date;
}

export interface Review {
  id: number;
  text: string;
  visible: boolean;
  rating: number;
  published_at: Date;
  created_at: Date;
  updated_at: Date;
  trip_id: number;
}

export interface Timeline {
  id: number;
  day: number;
  pois: Pois;
  description: null;
}

export interface Pois {
  id: number;
  name: string;
  cityName: string;
  description: string;
  latitude: number;
  longitude: number;
  published_at: Date;
  created_at: Date;
  updated_at: Date;
  images: PreviewImage[];
}
