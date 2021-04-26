export interface ImageModel {
  _id?: string;
  name?: string;
  alternativeText?: string;
  caption?: string;
  hash?: string;
  ext?: string;
  mime?: string;
  size?: number;
  width?: number;
  height?: number;
  url?: string;
  formats?: Formats;
  provider?: string;
  related?: string[];
  createdAt?: Date;
  updatedAt?: Date;
  __v?: number;
  id?: string;
}

export interface Formats {
  thumbnail?: Large;
  large?: Large;
  medium?: Large;
  small?: Large;
}

export interface Large {
  name?: string;
  hash?: string;
  ext?: string;
  mime?: string;
  width?: number;
  height?: number;
  size?: number;
  path?: null;
  url?: string;
}
