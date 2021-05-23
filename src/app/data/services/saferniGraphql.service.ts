import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `Long` scalar type represents 52-bit integers */
  Long: any;
  /** A time string with format: HH:mm:ss.SSS */
  Time: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};



export type AdminUser = {
  __typename?: 'AdminUser';
  id: Scalars['ID'];
  username?: Maybe<Scalars['String']>;
  firstname: Scalars['String'];
  lastname: Scalars['String'];
};

export type Booking = {
  __typename?: 'Booking';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  trip?: Maybe<Trips>;
  approved?: Maybe<Scalars['Boolean']>;
  basePrice: Scalars['Float'];
  currency: Enum_Booking_Currency;
  basePeopleCount: Scalars['Int'];
  discount?: Maybe<Scalars['Float']>;
  fullName: Scalars['String'];
  phone: Scalars['String'];
  message?: Maybe<Scalars['String']>;
  arrivalDate: Scalars['Date'];
  published_at?: Maybe<Scalars['DateTime']>;
};

export type BookingAggregator = {
  __typename?: 'BookingAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<BookingAggregatorSum>;
  avg?: Maybe<BookingAggregatorAvg>;
  min?: Maybe<BookingAggregatorMin>;
  max?: Maybe<BookingAggregatorMax>;
};

export type BookingAggregatorAvg = {
  __typename?: 'BookingAggregatorAvg';
  basePrice?: Maybe<Scalars['Float']>;
  basePeopleCount?: Maybe<Scalars['Float']>;
  discount?: Maybe<Scalars['Float']>;
};

export type BookingAggregatorMax = {
  __typename?: 'BookingAggregatorMax';
  basePrice?: Maybe<Scalars['Float']>;
  basePeopleCount?: Maybe<Scalars['Float']>;
  discount?: Maybe<Scalars['Float']>;
};

export type BookingAggregatorMin = {
  __typename?: 'BookingAggregatorMin';
  basePrice?: Maybe<Scalars['Float']>;
  basePeopleCount?: Maybe<Scalars['Float']>;
  discount?: Maybe<Scalars['Float']>;
};

export type BookingAggregatorSum = {
  __typename?: 'BookingAggregatorSum';
  basePrice?: Maybe<Scalars['Float']>;
  basePeopleCount?: Maybe<Scalars['Float']>;
  discount?: Maybe<Scalars['Float']>;
};

export type BookingConnection = {
  __typename?: 'BookingConnection';
  values?: Maybe<Array<Maybe<Booking>>>;
  groupBy?: Maybe<BookingGroupBy>;
  aggregate?: Maybe<BookingAggregator>;
};

export type BookingConnectionApproved = {
  __typename?: 'BookingConnectionApproved';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<BookingConnection>;
};

export type BookingConnectionArrivalDate = {
  __typename?: 'BookingConnectionArrivalDate';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<BookingConnection>;
};

export type BookingConnectionBasePeopleCount = {
  __typename?: 'BookingConnectionBasePeopleCount';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<BookingConnection>;
};

export type BookingConnectionBasePrice = {
  __typename?: 'BookingConnectionBasePrice';
  key?: Maybe<Scalars['Float']>;
  connection?: Maybe<BookingConnection>;
};

export type BookingConnectionCreatedAt = {
  __typename?: 'BookingConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<BookingConnection>;
};

export type BookingConnectionCurrency = {
  __typename?: 'BookingConnectionCurrency';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<BookingConnection>;
};

export type BookingConnectionDiscount = {
  __typename?: 'BookingConnectionDiscount';
  key?: Maybe<Scalars['Float']>;
  connection?: Maybe<BookingConnection>;
};

export type BookingConnectionFullName = {
  __typename?: 'BookingConnectionFullName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<BookingConnection>;
};

export type BookingConnectionId = {
  __typename?: 'BookingConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<BookingConnection>;
};

export type BookingConnectionMessage = {
  __typename?: 'BookingConnectionMessage';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<BookingConnection>;
};

export type BookingConnectionPhone = {
  __typename?: 'BookingConnectionPhone';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<BookingConnection>;
};

export type BookingConnectionPublished_At = {
  __typename?: 'BookingConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<BookingConnection>;
};

export type BookingConnectionTrip = {
  __typename?: 'BookingConnectionTrip';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<BookingConnection>;
};

export type BookingConnectionUpdatedAt = {
  __typename?: 'BookingConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<BookingConnection>;
};

export type BookingConnection_Id = {
  __typename?: 'BookingConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<BookingConnection>;
};

export type BookingGroupBy = {
  __typename?: 'BookingGroupBy';
  id?: Maybe<Array<Maybe<BookingConnectionId>>>;
  _id?: Maybe<Array<Maybe<BookingConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<BookingConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<BookingConnectionUpdatedAt>>>;
  trip?: Maybe<Array<Maybe<BookingConnectionTrip>>>;
  approved?: Maybe<Array<Maybe<BookingConnectionApproved>>>;
  basePrice?: Maybe<Array<Maybe<BookingConnectionBasePrice>>>;
  currency?: Maybe<Array<Maybe<BookingConnectionCurrency>>>;
  basePeopleCount?: Maybe<Array<Maybe<BookingConnectionBasePeopleCount>>>;
  discount?: Maybe<Array<Maybe<BookingConnectionDiscount>>>;
  fullName?: Maybe<Array<Maybe<BookingConnectionFullName>>>;
  phone?: Maybe<Array<Maybe<BookingConnectionPhone>>>;
  message?: Maybe<Array<Maybe<BookingConnectionMessage>>>;
  arrivalDate?: Maybe<Array<Maybe<BookingConnectionArrivalDate>>>;
  published_at?: Maybe<Array<Maybe<BookingConnectionPublished_At>>>;
};

export type BookingInput = {
  trip?: Maybe<Scalars['ID']>;
  approved?: Maybe<Scalars['Boolean']>;
  basePrice: Scalars['Float'];
  currency: Enum_Booking_Currency;
  basePeopleCount: Scalars['Int'];
  discount?: Maybe<Scalars['Float']>;
  fullName: Scalars['String'];
  phone: Scalars['String'];
  message?: Maybe<Scalars['String']>;
  arrivalDate: Scalars['Date'];
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type City = {
  __typename?: 'City';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  image?: Maybe<UploadFile>;
  locale?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  locations?: Maybe<Array<Maybe<Location>>>;
  localizations?: Maybe<Array<Maybe<City>>>;
};


export type CityLocationsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type CityLocalizationsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type CityAggregator = {
  __typename?: 'CityAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CityConnection = {
  __typename?: 'CityConnection';
  values?: Maybe<Array<Maybe<City>>>;
  groupBy?: Maybe<CityGroupBy>;
  aggregate?: Maybe<CityAggregator>;
};

export type CityConnectionCreatedAt = {
  __typename?: 'CityConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<CityConnection>;
};

export type CityConnectionDescription = {
  __typename?: 'CityConnectionDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<CityConnection>;
};

export type CityConnectionId = {
  __typename?: 'CityConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<CityConnection>;
};

export type CityConnectionImage = {
  __typename?: 'CityConnectionImage';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<CityConnection>;
};

export type CityConnectionLocale = {
  __typename?: 'CityConnectionLocale';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<CityConnection>;
};

export type CityConnectionName = {
  __typename?: 'CityConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<CityConnection>;
};

export type CityConnectionPublished_At = {
  __typename?: 'CityConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<CityConnection>;
};

export type CityConnectionUpdatedAt = {
  __typename?: 'CityConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<CityConnection>;
};

export type CityConnection_Id = {
  __typename?: 'CityConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<CityConnection>;
};

export type CityGroupBy = {
  __typename?: 'CityGroupBy';
  id?: Maybe<Array<Maybe<CityConnectionId>>>;
  _id?: Maybe<Array<Maybe<CityConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<CityConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<CityConnectionUpdatedAt>>>;
  name?: Maybe<Array<Maybe<CityConnectionName>>>;
  description?: Maybe<Array<Maybe<CityConnectionDescription>>>;
  image?: Maybe<Array<Maybe<CityConnectionImage>>>;
  locale?: Maybe<Array<Maybe<CityConnectionLocale>>>;
  published_at?: Maybe<Array<Maybe<CityConnectionPublished_At>>>;
};

export type CityInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['ID']>;
  locations?: Maybe<Array<Maybe<Scalars['ID']>>>;
  localizations?: Maybe<Array<Maybe<Scalars['ID']>>>;
  locale?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type ComponentCoordinateCoordinate = {
  __typename?: 'ComponentCoordinateCoordinate';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

export type ComponentCoordinateCoordinateInput = {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

export type ComponentFeatureFeature = {
  __typename?: 'ComponentFeatureFeature';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  feature?: Maybe<Feature>;
  included: Scalars['Boolean'];
};

export type ComponentFeatureFeatureInput = {
  feature?: Maybe<Scalars['ID']>;
  included: Scalars['Boolean'];
};

export type ComponentPricePrice = {
  __typename?: 'ComponentPricePrice';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  basePrice: Scalars['Float'];
  currency: Enum_Componentpriceprice_Currency;
  basePeopleCount: Scalars['Int'];
  extraAdultFee?: Maybe<Scalars['Float']>;
  discount?: Maybe<Scalars['Float']>;
};

export type ComponentPricePriceInput = {
  basePrice: Scalars['Float'];
  currency?: Maybe<Enum_Componentpriceprice_Currency>;
  basePeopleCount: Scalars['Int'];
  extraAdultFee?: Maybe<Scalars['Float']>;
  discount?: Maybe<Scalars['Float']>;
};

export type ComponentTimelineTimeline = {
  __typename?: 'ComponentTimelineTimeline';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  day: Scalars['Int'];
  description?: Maybe<Scalars['String']>;
  locations?: Maybe<Array<Maybe<Location>>>;
};


export type ComponentTimelineTimelineLocationsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type ComponentTimelineTimelineInput = {
  day: Scalars['Int'];
  description?: Maybe<Scalars['String']>;
  locations?: Maybe<Array<Maybe<Scalars['ID']>>>;
};



export enum Enum_Booking_Currency {
  Dollar = 'dollar',
  Lira = 'lira'
}

export enum Enum_Componentpriceprice_Currency {
  Dollar = 'dollar',
  Lira = 'lira'
}

export enum Enum_Trips_Currency {
  Dollar = 'dollar',
  Lira = 'lira'
}

export enum Enum_Trips_Traveltype {
  Private = 'private',
  Public = 'public',
  Both = 'both'
}

export enum Enum_Trips_Trip_Type {
  Touristic = 'touristic',
  Medical = 'medical'
}

export type Feature = {
  __typename?: 'Feature';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  info?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  localizations?: Maybe<Array<Maybe<Feature>>>;
};


export type FeatureLocalizationsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type FeatureAggregator = {
  __typename?: 'FeatureAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type FeatureConnection = {
  __typename?: 'FeatureConnection';
  values?: Maybe<Array<Maybe<Feature>>>;
  groupBy?: Maybe<FeatureGroupBy>;
  aggregate?: Maybe<FeatureAggregator>;
};

export type FeatureConnectionCreatedAt = {
  __typename?: 'FeatureConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<FeatureConnection>;
};

export type FeatureConnectionId = {
  __typename?: 'FeatureConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<FeatureConnection>;
};

export type FeatureConnectionInfo = {
  __typename?: 'FeatureConnectionInfo';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<FeatureConnection>;
};

export type FeatureConnectionLocale = {
  __typename?: 'FeatureConnectionLocale';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<FeatureConnection>;
};

export type FeatureConnectionName = {
  __typename?: 'FeatureConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<FeatureConnection>;
};

export type FeatureConnectionPublished_At = {
  __typename?: 'FeatureConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<FeatureConnection>;
};

export type FeatureConnectionUpdatedAt = {
  __typename?: 'FeatureConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<FeatureConnection>;
};

export type FeatureConnection_Id = {
  __typename?: 'FeatureConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<FeatureConnection>;
};

export type FeatureGroupBy = {
  __typename?: 'FeatureGroupBy';
  id?: Maybe<Array<Maybe<FeatureConnectionId>>>;
  _id?: Maybe<Array<Maybe<FeatureConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<FeatureConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<FeatureConnectionUpdatedAt>>>;
  name?: Maybe<Array<Maybe<FeatureConnectionName>>>;
  info?: Maybe<Array<Maybe<FeatureConnectionInfo>>>;
  locale?: Maybe<Array<Maybe<FeatureConnectionLocale>>>;
  published_at?: Maybe<Array<Maybe<FeatureConnectionPublished_At>>>;
};

export type FeatureInput = {
  name: Scalars['String'];
  info?: Maybe<Scalars['String']>;
  localizations?: Maybe<Array<Maybe<Scalars['ID']>>>;
  locale?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type FileInfoInput = {
  name?: Maybe<Scalars['String']>;
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
};

export type FileInput = {
  name: Scalars['String'];
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  ext?: Maybe<Scalars['String']>;
  mime: Scalars['String'];
  size: Scalars['Float'];
  url: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type HotelInput = {
  name: Scalars['String'];
  stars: Scalars['Int'];
  url?: Maybe<Scalars['String']>;
  trips?: Maybe<Array<Maybe<Scalars['ID']>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type Hotels = {
  __typename?: 'Hotels';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  stars: Scalars['Int'];
  url?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  trips?: Maybe<Array<Maybe<Trips>>>;
};


export type HotelsTripsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type HotelsAggregator = {
  __typename?: 'HotelsAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<HotelsAggregatorSum>;
  avg?: Maybe<HotelsAggregatorAvg>;
  min?: Maybe<HotelsAggregatorMin>;
  max?: Maybe<HotelsAggregatorMax>;
};

export type HotelsAggregatorAvg = {
  __typename?: 'HotelsAggregatorAvg';
  stars?: Maybe<Scalars['Float']>;
};

export type HotelsAggregatorMax = {
  __typename?: 'HotelsAggregatorMax';
  stars?: Maybe<Scalars['Float']>;
};

export type HotelsAggregatorMin = {
  __typename?: 'HotelsAggregatorMin';
  stars?: Maybe<Scalars['Float']>;
};

export type HotelsAggregatorSum = {
  __typename?: 'HotelsAggregatorSum';
  stars?: Maybe<Scalars['Float']>;
};

export type HotelsConnection = {
  __typename?: 'HotelsConnection';
  values?: Maybe<Array<Maybe<Hotels>>>;
  groupBy?: Maybe<HotelsGroupBy>;
  aggregate?: Maybe<HotelsAggregator>;
};

export type HotelsConnectionCreatedAt = {
  __typename?: 'HotelsConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<HotelsConnection>;
};

export type HotelsConnectionId = {
  __typename?: 'HotelsConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<HotelsConnection>;
};

export type HotelsConnectionName = {
  __typename?: 'HotelsConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<HotelsConnection>;
};

export type HotelsConnectionPublished_At = {
  __typename?: 'HotelsConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<HotelsConnection>;
};

export type HotelsConnectionStars = {
  __typename?: 'HotelsConnectionStars';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<HotelsConnection>;
};

export type HotelsConnectionUpdatedAt = {
  __typename?: 'HotelsConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<HotelsConnection>;
};

export type HotelsConnectionUrl = {
  __typename?: 'HotelsConnectionUrl';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<HotelsConnection>;
};

export type HotelsConnection_Id = {
  __typename?: 'HotelsConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<HotelsConnection>;
};

export type HotelsGroupBy = {
  __typename?: 'HotelsGroupBy';
  id?: Maybe<Array<Maybe<HotelsConnectionId>>>;
  _id?: Maybe<Array<Maybe<HotelsConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<HotelsConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<HotelsConnectionUpdatedAt>>>;
  name?: Maybe<Array<Maybe<HotelsConnectionName>>>;
  stars?: Maybe<Array<Maybe<HotelsConnectionStars>>>;
  url?: Maybe<Array<Maybe<HotelsConnectionUrl>>>;
  published_at?: Maybe<Array<Maybe<HotelsConnectionPublished_At>>>;
};

export type I18NLocale = {
  __typename?: 'I18NLocale';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
};

export type InputId = {
  id: Scalars['ID'];
};


export type LocaleInput = {
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type Location = {
  __typename?: 'Location';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  city?: Maybe<City>;
  coordinate?: Maybe<ComponentCoordinateCoordinate>;
  locale?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  images?: Maybe<Array<Maybe<UploadFile>>>;
  localizations?: Maybe<Array<Maybe<Location>>>;
};


export type LocationImagesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type LocationLocalizationsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type LocationAggregator = {
  __typename?: 'LocationAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type LocationConnection = {
  __typename?: 'LocationConnection';
  values?: Maybe<Array<Maybe<Location>>>;
  groupBy?: Maybe<LocationGroupBy>;
  aggregate?: Maybe<LocationAggregator>;
};

export type LocationConnectionCity = {
  __typename?: 'LocationConnectionCity';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<LocationConnection>;
};

export type LocationConnectionCoordinate = {
  __typename?: 'LocationConnectionCoordinate';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<LocationConnection>;
};

export type LocationConnectionCreatedAt = {
  __typename?: 'LocationConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<LocationConnection>;
};

export type LocationConnectionDescription = {
  __typename?: 'LocationConnectionDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<LocationConnection>;
};

export type LocationConnectionId = {
  __typename?: 'LocationConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<LocationConnection>;
};

export type LocationConnectionLocale = {
  __typename?: 'LocationConnectionLocale';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<LocationConnection>;
};

export type LocationConnectionName = {
  __typename?: 'LocationConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<LocationConnection>;
};

export type LocationConnectionPublished_At = {
  __typename?: 'LocationConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<LocationConnection>;
};

export type LocationConnectionUpdatedAt = {
  __typename?: 'LocationConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<LocationConnection>;
};

export type LocationConnection_Id = {
  __typename?: 'LocationConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<LocationConnection>;
};

export type LocationGroupBy = {
  __typename?: 'LocationGroupBy';
  id?: Maybe<Array<Maybe<LocationConnectionId>>>;
  _id?: Maybe<Array<Maybe<LocationConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<LocationConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<LocationConnectionUpdatedAt>>>;
  name?: Maybe<Array<Maybe<LocationConnectionName>>>;
  description?: Maybe<Array<Maybe<LocationConnectionDescription>>>;
  city?: Maybe<Array<Maybe<LocationConnectionCity>>>;
  coordinate?: Maybe<Array<Maybe<LocationConnectionCoordinate>>>;
  locale?: Maybe<Array<Maybe<LocationConnectionLocale>>>;
  published_at?: Maybe<Array<Maybe<LocationConnectionPublished_At>>>;
};

export type LocationInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  images?: Maybe<Array<Maybe<Scalars['ID']>>>;
  city?: Maybe<Scalars['ID']>;
  coordinate?: Maybe<ComponentCoordinateCoordinateInput>;
  localizations?: Maybe<Array<Maybe<Scalars['ID']>>>;
  locale?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};


export type Morph = UsersPermissionsMe | UsersPermissionsMeRole | UsersPermissionsLoginPayload | UserPermissionsPasswordPayload | Booking | BookingConnection | BookingAggregator | BookingAggregatorSum | BookingAggregatorAvg | BookingAggregatorMin | BookingAggregatorMax | BookingGroupBy | BookingConnectionId | BookingConnection_Id | BookingConnectionCreatedAt | BookingConnectionUpdatedAt | BookingConnectionTrip | BookingConnectionApproved | BookingConnectionBasePrice | BookingConnectionCurrency | BookingConnectionBasePeopleCount | BookingConnectionDiscount | BookingConnectionFullName | BookingConnectionPhone | BookingConnectionMessage | BookingConnectionArrivalDate | BookingConnectionPublished_At | CreateBookingPayload | UpdateBookingPayload | DeleteBookingPayload | City | CityConnection | CityAggregator | CityGroupBy | CityConnectionId | CityConnection_Id | CityConnectionCreatedAt | CityConnectionUpdatedAt | CityConnectionName | CityConnectionDescription | CityConnectionImage | CityConnectionLocale | CityConnectionPublished_At | CreateCityPayload | UpdateCityPayload | DeleteCityPayload | Feature | FeatureConnection | FeatureAggregator | FeatureGroupBy | FeatureConnectionId | FeatureConnection_Id | FeatureConnectionCreatedAt | FeatureConnectionUpdatedAt | FeatureConnectionName | FeatureConnectionInfo | FeatureConnectionLocale | FeatureConnectionPublished_At | CreateFeaturePayload | UpdateFeaturePayload | DeleteFeaturePayload | Hotels | HotelsConnection | HotelsAggregator | HotelsAggregatorSum | HotelsAggregatorAvg | HotelsAggregatorMin | HotelsAggregatorMax | HotelsGroupBy | HotelsConnectionId | HotelsConnection_Id | HotelsConnectionCreatedAt | HotelsConnectionUpdatedAt | HotelsConnectionName | HotelsConnectionStars | HotelsConnectionUrl | HotelsConnectionPublished_At | CreateHotelPayload | UpdateHotelPayload | DeleteHotelPayload | Location | LocationConnection | LocationAggregator | LocationGroupBy | LocationConnectionId | LocationConnection_Id | LocationConnectionCreatedAt | LocationConnectionUpdatedAt | LocationConnectionName | LocationConnectionDescription | LocationConnectionCity | LocationConnectionCoordinate | LocationConnectionLocale | LocationConnectionPublished_At | CreateLocationPayload | UpdateLocationPayload | DeleteLocationPayload | Partner | PartnerConnection | PartnerAggregator | PartnerGroupBy | PartnerConnectionId | PartnerConnection_Id | PartnerConnectionCreatedAt | PartnerConnectionUpdatedAt | PartnerConnectionName | PartnerConnectionPhone | PartnerConnectionAddress | PartnerConnectionEmail | PartnerConnectionPublished_At | CreatePartnerPayload | UpdatePartnerPayload | DeletePartnerPayload | Review | ReviewConnection | ReviewAggregator | ReviewAggregatorSum | ReviewAggregatorAvg | ReviewAggregatorMin | ReviewAggregatorMax | ReviewGroupBy | ReviewConnectionId | ReviewConnection_Id | ReviewConnectionCreatedAt | ReviewConnectionUpdatedAt | ReviewConnectionText | ReviewConnectionRating | ReviewConnectionAuthor | ReviewConnectionActive | ReviewConnectionTrip | ReviewConnectionPublished_At | CreateReviewPayload | UpdateReviewPayload | DeleteReviewPayload | Subscribers | SubscribersConnection | SubscribersAggregator | SubscribersGroupBy | SubscribersConnectionId | SubscribersConnection_Id | SubscribersConnectionCreatedAt | SubscribersConnectionUpdatedAt | SubscribersConnectionEmail | SubscribersConnectionPublished_At | CreateSubscriberPayload | UpdateSubscriberPayload | DeleteSubscriberPayload | Trips | TripsConnection | TripsAggregator | TripsAggregatorSum | TripsAggregatorAvg | TripsAggregatorMin | TripsAggregatorMax | TripsGroupBy | TripsConnectionId | TripsConnection_Id | TripsConnectionCreatedAt | TripsConnectionUpdatedAt | TripsConnectionName | TripsConnectionPreviewImage | TripsConnectionActive | TripsConnectionTrip_Type | TripsConnectionDescription | TripsConnectionDuration | TripsConnectionPartner | TripsConnectionCurrency | TripsConnectionCity | TripsConnectionBasePrice | TripsConnectionBasePeopleCount | TripsConnectionDiscount | TripsConnectionTravelType | TripsConnectionHotel | TripsConnectionLocale | TripsConnectionPublished_At | CreateTripPayload | UpdateTripPayload | DeleteTripPayload | I18NLocale | UploadFile | UploadFileConnection | UploadFileAggregator | UploadFileAggregatorSum | UploadFileAggregatorAvg | UploadFileAggregatorMin | UploadFileAggregatorMax | UploadFileGroupBy | UploadFileConnectionId | UploadFileConnection_Id | UploadFileConnectionCreatedAt | UploadFileConnectionUpdatedAt | UploadFileConnectionName | UploadFileConnectionAlternativeText | UploadFileConnectionCaption | UploadFileConnectionWidth | UploadFileConnectionHeight | UploadFileConnectionFormats | UploadFileConnectionHash | UploadFileConnectionExt | UploadFileConnectionMime | UploadFileConnectionSize | UploadFileConnectionUrl | UploadFileConnectionPreviewUrl | UploadFileConnectionProvider | UploadFileConnectionProvider_Metadata | DeleteFilePayload | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsRoleConnection | UsersPermissionsRoleAggregator | UsersPermissionsRoleGroupBy | UsersPermissionsRoleConnectionId | UsersPermissionsRoleConnection_Id | UsersPermissionsRoleConnectionName | UsersPermissionsRoleConnectionDescription | UsersPermissionsRoleConnectionType | CreateRolePayload | UpdateRolePayload | DeleteRolePayload | UsersPermissionsUser | UsersPermissionsUserConnection | UsersPermissionsUserAggregator | UsersPermissionsUserGroupBy | UsersPermissionsUserConnectionId | UsersPermissionsUserConnection_Id | UsersPermissionsUserConnectionCreatedAt | UsersPermissionsUserConnectionUpdatedAt | UsersPermissionsUserConnectionUsername | UsersPermissionsUserConnectionEmail | UsersPermissionsUserConnectionProvider | UsersPermissionsUserConnectionConfirmed | UsersPermissionsUserConnectionBlocked | UsersPermissionsUserConnectionRole | CreateUserPayload | UpdateUserPayload | DeleteUserPayload | ComponentCoordinateCoordinate | ComponentFeatureFeature | ComponentPricePrice | ComponentTimelineTimeline;

export type Mutation = {
  __typename?: 'Mutation';
  createBooking?: Maybe<CreateBookingPayload>;
  updateBooking?: Maybe<UpdateBookingPayload>;
  deleteBooking?: Maybe<DeleteBookingPayload>;
  createCity?: Maybe<CreateCityPayload>;
  updateCity?: Maybe<UpdateCityPayload>;
  deleteCity?: Maybe<DeleteCityPayload>;
  createFeature?: Maybe<CreateFeaturePayload>;
  updateFeature?: Maybe<UpdateFeaturePayload>;
  deleteFeature?: Maybe<DeleteFeaturePayload>;
  createHotel?: Maybe<CreateHotelPayload>;
  updateHotel?: Maybe<UpdateHotelPayload>;
  deleteHotel?: Maybe<DeleteHotelPayload>;
  createLocation?: Maybe<CreateLocationPayload>;
  updateLocation?: Maybe<UpdateLocationPayload>;
  deleteLocation?: Maybe<DeleteLocationPayload>;
  createPartner?: Maybe<CreatePartnerPayload>;
  updatePartner?: Maybe<UpdatePartnerPayload>;
  deletePartner?: Maybe<DeletePartnerPayload>;
  createReview?: Maybe<CreateReviewPayload>;
  updateReview?: Maybe<UpdateReviewPayload>;
  deleteReview?: Maybe<DeleteReviewPayload>;
  createSubscriber?: Maybe<CreateSubscriberPayload>;
  updateSubscriber?: Maybe<UpdateSubscriberPayload>;
  deleteSubscriber?: Maybe<DeleteSubscriberPayload>;
  createTrip?: Maybe<CreateTripPayload>;
  updateTrip?: Maybe<UpdateTripPayload>;
  deleteTrip?: Maybe<DeleteTripPayload>;
  /** Delete one file */
  deleteFile?: Maybe<DeleteFilePayload>;
  /** Create a new role */
  createRole?: Maybe<CreateRolePayload>;
  /** Update an existing role */
  updateRole?: Maybe<UpdateRolePayload>;
  /** Delete an existing role */
  deleteRole?: Maybe<DeleteRolePayload>;
  /** Create a new user */
  createUser?: Maybe<CreateUserPayload>;
  /** Update an existing user */
  updateUser?: Maybe<UpdateUserPayload>;
  /** Delete an existing user */
  deleteUser?: Maybe<DeleteUserPayload>;
  createCityLocalization: City;
  createFeatureLocalization: Feature;
  createLocationLocalization: Location;
  createTripLocalization: Trips;
  upload: UploadFile;
  multipleUpload: Array<Maybe<UploadFile>>;
  updateFileInfo: UploadFile;
  login: UsersPermissionsLoginPayload;
  register: UsersPermissionsLoginPayload;
  forgotPassword?: Maybe<UserPermissionsPasswordPayload>;
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
};


export type MutationCreateBookingArgs = {
  input?: Maybe<CreateBookingInput>;
};


export type MutationUpdateBookingArgs = {
  input?: Maybe<UpdateBookingInput>;
};


export type MutationDeleteBookingArgs = {
  input?: Maybe<DeleteBookingInput>;
};


export type MutationCreateCityArgs = {
  input?: Maybe<CreateCityInput>;
};


export type MutationUpdateCityArgs = {
  input?: Maybe<UpdateCityInput>;
};


export type MutationDeleteCityArgs = {
  input?: Maybe<DeleteCityInput>;
};


export type MutationCreateFeatureArgs = {
  input?: Maybe<CreateFeatureInput>;
};


export type MutationUpdateFeatureArgs = {
  input?: Maybe<UpdateFeatureInput>;
};


export type MutationDeleteFeatureArgs = {
  input?: Maybe<DeleteFeatureInput>;
};


export type MutationCreateHotelArgs = {
  input?: Maybe<CreateHotelInput>;
};


export type MutationUpdateHotelArgs = {
  input?: Maybe<UpdateHotelInput>;
};


export type MutationDeleteHotelArgs = {
  input?: Maybe<DeleteHotelInput>;
};


export type MutationCreateLocationArgs = {
  input?: Maybe<CreateLocationInput>;
};


export type MutationUpdateLocationArgs = {
  input?: Maybe<UpdateLocationInput>;
};


export type MutationDeleteLocationArgs = {
  input?: Maybe<DeleteLocationInput>;
};


export type MutationCreatePartnerArgs = {
  input?: Maybe<CreatePartnerInput>;
};


export type MutationUpdatePartnerArgs = {
  input?: Maybe<UpdatePartnerInput>;
};


export type MutationDeletePartnerArgs = {
  input?: Maybe<DeletePartnerInput>;
};


export type MutationCreateReviewArgs = {
  input?: Maybe<CreateReviewInput>;
};


export type MutationUpdateReviewArgs = {
  input?: Maybe<UpdateReviewInput>;
};


export type MutationDeleteReviewArgs = {
  input?: Maybe<DeleteReviewInput>;
};


export type MutationCreateSubscriberArgs = {
  input?: Maybe<CreateSubscriberInput>;
};


export type MutationUpdateSubscriberArgs = {
  input?: Maybe<UpdateSubscriberInput>;
};


export type MutationDeleteSubscriberArgs = {
  input?: Maybe<DeleteSubscriberInput>;
};


export type MutationCreateTripArgs = {
  input?: Maybe<CreateTripInput>;
};


export type MutationUpdateTripArgs = {
  input?: Maybe<UpdateTripInput>;
};


export type MutationDeleteTripArgs = {
  input?: Maybe<DeleteTripInput>;
};


export type MutationDeleteFileArgs = {
  input?: Maybe<DeleteFileInput>;
};


export type MutationCreateRoleArgs = {
  input?: Maybe<CreateRoleInput>;
};


export type MutationUpdateRoleArgs = {
  input?: Maybe<UpdateRoleInput>;
};


export type MutationDeleteRoleArgs = {
  input?: Maybe<DeleteRoleInput>;
};


export type MutationCreateUserArgs = {
  input?: Maybe<CreateUserInput>;
};


export type MutationUpdateUserArgs = {
  input?: Maybe<UpdateUserInput>;
};


export type MutationDeleteUserArgs = {
  input?: Maybe<DeleteUserInput>;
};


export type MutationCreateCityLocalizationArgs = {
  input: UpdateCityInput;
};


export type MutationCreateFeatureLocalizationArgs = {
  input: UpdateFeatureInput;
};


export type MutationCreateLocationLocalizationArgs = {
  input: UpdateLocationInput;
};


export type MutationCreateTripLocalizationArgs = {
  input: UpdateTripInput;
};


export type MutationUploadArgs = {
  refId?: Maybe<Scalars['ID']>;
  ref?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  info?: Maybe<FileInfoInput>;
  file: Scalars['Upload'];
};


export type MutationMultipleUploadArgs = {
  refId?: Maybe<Scalars['ID']>;
  ref?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  files: Array<Maybe<Scalars['Upload']>>;
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info: FileInfoInput;
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationResetPasswordArgs = {
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
  code: Scalars['String'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};

export type Partner = {
  __typename?: 'Partner';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  phone: Scalars['String'];
  address?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  trips?: Maybe<Array<Maybe<Trips>>>;
};


export type PartnerTripsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type PartnerAggregator = {
  __typename?: 'PartnerAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type PartnerConnection = {
  __typename?: 'PartnerConnection';
  values?: Maybe<Array<Maybe<Partner>>>;
  groupBy?: Maybe<PartnerGroupBy>;
  aggregate?: Maybe<PartnerAggregator>;
};

export type PartnerConnectionAddress = {
  __typename?: 'PartnerConnectionAddress';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<PartnerConnection>;
};

export type PartnerConnectionCreatedAt = {
  __typename?: 'PartnerConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<PartnerConnection>;
};

export type PartnerConnectionEmail = {
  __typename?: 'PartnerConnectionEmail';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<PartnerConnection>;
};

export type PartnerConnectionId = {
  __typename?: 'PartnerConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<PartnerConnection>;
};

export type PartnerConnectionName = {
  __typename?: 'PartnerConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<PartnerConnection>;
};

export type PartnerConnectionPhone = {
  __typename?: 'PartnerConnectionPhone';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<PartnerConnection>;
};

export type PartnerConnectionPublished_At = {
  __typename?: 'PartnerConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<PartnerConnection>;
};

export type PartnerConnectionUpdatedAt = {
  __typename?: 'PartnerConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<PartnerConnection>;
};

export type PartnerConnection_Id = {
  __typename?: 'PartnerConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<PartnerConnection>;
};

export type PartnerGroupBy = {
  __typename?: 'PartnerGroupBy';
  id?: Maybe<Array<Maybe<PartnerConnectionId>>>;
  _id?: Maybe<Array<Maybe<PartnerConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<PartnerConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<PartnerConnectionUpdatedAt>>>;
  name?: Maybe<Array<Maybe<PartnerConnectionName>>>;
  phone?: Maybe<Array<Maybe<PartnerConnectionPhone>>>;
  address?: Maybe<Array<Maybe<PartnerConnectionAddress>>>;
  email?: Maybe<Array<Maybe<PartnerConnectionEmail>>>;
  published_at?: Maybe<Array<Maybe<PartnerConnectionPublished_At>>>;
};

export type PartnerInput = {
  name: Scalars['String'];
  phone: Scalars['String'];
  address?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  trips?: Maybe<Array<Maybe<Scalars['ID']>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  __typename?: 'Query';
  booking?: Maybe<Booking>;
  bookings?: Maybe<Array<Maybe<Booking>>>;
  bookingsConnection?: Maybe<BookingConnection>;
  city?: Maybe<City>;
  cities?: Maybe<Array<Maybe<City>>>;
  citiesConnection?: Maybe<CityConnection>;
  feature?: Maybe<Feature>;
  features?: Maybe<Array<Maybe<Feature>>>;
  featuresConnection?: Maybe<FeatureConnection>;
  hotel?: Maybe<Hotels>;
  hotels?: Maybe<Array<Maybe<Hotels>>>;
  hotelsConnection?: Maybe<HotelsConnection>;
  location?: Maybe<Location>;
  locations?: Maybe<Array<Maybe<Location>>>;
  locationsConnection?: Maybe<LocationConnection>;
  partner?: Maybe<Partner>;
  partners?: Maybe<Array<Maybe<Partner>>>;
  partnersConnection?: Maybe<PartnerConnection>;
  review?: Maybe<Review>;
  reviews?: Maybe<Array<Maybe<Review>>>;
  reviewsConnection?: Maybe<ReviewConnection>;
  subscriber?: Maybe<Subscribers>;
  subscribers?: Maybe<Array<Maybe<Subscribers>>>;
  subscribersConnection?: Maybe<SubscribersConnection>;
  trip?: Maybe<Trips>;
  trips?: Maybe<Array<Maybe<Trips>>>;
  tripsConnection?: Maybe<TripsConnection>;
  files?: Maybe<Array<Maybe<UploadFile>>>;
  filesConnection?: Maybe<UploadFileConnection>;
  role?: Maybe<UsersPermissionsRole>;
  /** Retrieve all the existing roles. You can't apply filters on this query. */
  roles?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  rolesConnection?: Maybe<UsersPermissionsRoleConnection>;
  user?: Maybe<UsersPermissionsUser>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  usersConnection?: Maybe<UsersPermissionsUserConnection>;
  me?: Maybe<UsersPermissionsMe>;
};


export type QueryBookingArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryBookingsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryBookingsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryCityArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryCitiesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryCitiesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryFeatureArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryFeaturesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryFeaturesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryHotelArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryHotelsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryHotelsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryLocationArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryLocationsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryLocationsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryPartnerArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryPartnersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryPartnersConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryReviewArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryReviewsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryReviewsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QuerySubscriberArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QuerySubscribersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QuerySubscribersConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryTripArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryTripsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryTripsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryFilesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryFilesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryRoleArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryRolesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryRolesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryUsersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryUsersConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type Review = {
  __typename?: 'Review';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  text?: Maybe<Scalars['String']>;
  rating: Scalars['Float'];
  author?: Maybe<UsersPermissionsUser>;
  active?: Maybe<Scalars['Boolean']>;
  trip?: Maybe<Trips>;
  published_at?: Maybe<Scalars['DateTime']>;
};

export type ReviewAggregator = {
  __typename?: 'ReviewAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<ReviewAggregatorSum>;
  avg?: Maybe<ReviewAggregatorAvg>;
  min?: Maybe<ReviewAggregatorMin>;
  max?: Maybe<ReviewAggregatorMax>;
};

export type ReviewAggregatorAvg = {
  __typename?: 'ReviewAggregatorAvg';
  rating?: Maybe<Scalars['Float']>;
};

export type ReviewAggregatorMax = {
  __typename?: 'ReviewAggregatorMax';
  rating?: Maybe<Scalars['Float']>;
};

export type ReviewAggregatorMin = {
  __typename?: 'ReviewAggregatorMin';
  rating?: Maybe<Scalars['Float']>;
};

export type ReviewAggregatorSum = {
  __typename?: 'ReviewAggregatorSum';
  rating?: Maybe<Scalars['Float']>;
};

export type ReviewConnection = {
  __typename?: 'ReviewConnection';
  values?: Maybe<Array<Maybe<Review>>>;
  groupBy?: Maybe<ReviewGroupBy>;
  aggregate?: Maybe<ReviewAggregator>;
};

export type ReviewConnectionActive = {
  __typename?: 'ReviewConnectionActive';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<ReviewConnection>;
};

export type ReviewConnectionAuthor = {
  __typename?: 'ReviewConnectionAuthor';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ReviewConnection>;
};

export type ReviewConnectionCreatedAt = {
  __typename?: 'ReviewConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ReviewConnection>;
};

export type ReviewConnectionId = {
  __typename?: 'ReviewConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ReviewConnection>;
};

export type ReviewConnectionPublished_At = {
  __typename?: 'ReviewConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ReviewConnection>;
};

export type ReviewConnectionRating = {
  __typename?: 'ReviewConnectionRating';
  key?: Maybe<Scalars['Float']>;
  connection?: Maybe<ReviewConnection>;
};

export type ReviewConnectionText = {
  __typename?: 'ReviewConnectionText';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ReviewConnection>;
};

export type ReviewConnectionTrip = {
  __typename?: 'ReviewConnectionTrip';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ReviewConnection>;
};

export type ReviewConnectionUpdatedAt = {
  __typename?: 'ReviewConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ReviewConnection>;
};

export type ReviewConnection_Id = {
  __typename?: 'ReviewConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ReviewConnection>;
};

export type ReviewGroupBy = {
  __typename?: 'ReviewGroupBy';
  id?: Maybe<Array<Maybe<ReviewConnectionId>>>;
  _id?: Maybe<Array<Maybe<ReviewConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<ReviewConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<ReviewConnectionUpdatedAt>>>;
  text?: Maybe<Array<Maybe<ReviewConnectionText>>>;
  rating?: Maybe<Array<Maybe<ReviewConnectionRating>>>;
  author?: Maybe<Array<Maybe<ReviewConnectionAuthor>>>;
  active?: Maybe<Array<Maybe<ReviewConnectionActive>>>;
  trip?: Maybe<Array<Maybe<ReviewConnectionTrip>>>;
  published_at?: Maybe<Array<Maybe<ReviewConnectionPublished_At>>>;
};

export type ReviewInput = {
  text?: Maybe<Scalars['String']>;
  rating: Scalars['Float'];
  author?: Maybe<Scalars['ID']>;
  active?: Maybe<Scalars['Boolean']>;
  trip?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type RoleInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type SubscriberInput = {
  email: Scalars['String'];
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type Subscribers = {
  __typename?: 'Subscribers';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  email: Scalars['String'];
  published_at?: Maybe<Scalars['DateTime']>;
};

export type SubscribersAggregator = {
  __typename?: 'SubscribersAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type SubscribersConnection = {
  __typename?: 'SubscribersConnection';
  values?: Maybe<Array<Maybe<Subscribers>>>;
  groupBy?: Maybe<SubscribersGroupBy>;
  aggregate?: Maybe<SubscribersAggregator>;
};

export type SubscribersConnectionCreatedAt = {
  __typename?: 'SubscribersConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<SubscribersConnection>;
};

export type SubscribersConnectionEmail = {
  __typename?: 'SubscribersConnectionEmail';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<SubscribersConnection>;
};

export type SubscribersConnectionId = {
  __typename?: 'SubscribersConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<SubscribersConnection>;
};

export type SubscribersConnectionPublished_At = {
  __typename?: 'SubscribersConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<SubscribersConnection>;
};

export type SubscribersConnectionUpdatedAt = {
  __typename?: 'SubscribersConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<SubscribersConnection>;
};

export type SubscribersConnection_Id = {
  __typename?: 'SubscribersConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<SubscribersConnection>;
};

export type SubscribersGroupBy = {
  __typename?: 'SubscribersGroupBy';
  id?: Maybe<Array<Maybe<SubscribersConnectionId>>>;
  _id?: Maybe<Array<Maybe<SubscribersConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<SubscribersConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<SubscribersConnectionUpdatedAt>>>;
  email?: Maybe<Array<Maybe<SubscribersConnectionEmail>>>;
  published_at?: Maybe<Array<Maybe<SubscribersConnectionPublished_At>>>;
};


export type TripInput = {
  name: Scalars['String'];
  previewImage?: Maybe<Scalars['ID']>;
  active?: Maybe<Scalars['Boolean']>;
  trip_type: Enum_Trips_Trip_Type;
  description?: Maybe<Scalars['String']>;
  duration: Scalars['Int'];
  partner?: Maybe<Scalars['ID']>;
  currency?: Maybe<Enum_Trips_Currency>;
  city?: Maybe<Scalars['ID']>;
  features?: Maybe<Array<Maybe<ComponentFeatureFeatureInput>>>;
  basePrice: Scalars['Int'];
  basePeopleCount: Scalars['Int'];
  discount?: Maybe<Scalars['Float']>;
  travelType: Enum_Trips_Traveltype;
  hotel?: Maybe<Scalars['ID']>;
  plan?: Maybe<Array<Maybe<ComponentTimelineTimelineInput>>>;
  localizations?: Maybe<Array<Maybe<Scalars['ID']>>>;
  locale?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type Trips = {
  __typename?: 'Trips';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  previewImage?: Maybe<UploadFile>;
  active?: Maybe<Scalars['Boolean']>;
  trip_type: Enum_Trips_Trip_Type;
  description?: Maybe<Scalars['String']>;
  duration: Scalars['Int'];
  partner?: Maybe<Partner>;
  currency?: Maybe<Enum_Trips_Currency>;
  city?: Maybe<City>;
  features?: Maybe<Array<Maybe<ComponentFeatureFeature>>>;
  basePrice: Scalars['Int'];
  basePeopleCount: Scalars['Int'];
  discount?: Maybe<Scalars['Float']>;
  travelType: Enum_Trips_Traveltype;
  hotel?: Maybe<Hotels>;
  plan?: Maybe<Array<Maybe<ComponentTimelineTimeline>>>;
  locale?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  localizations?: Maybe<Array<Maybe<Trips>>>;
};


export type TripsLocalizationsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type TripsAggregator = {
  __typename?: 'TripsAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<TripsAggregatorSum>;
  avg?: Maybe<TripsAggregatorAvg>;
  min?: Maybe<TripsAggregatorMin>;
  max?: Maybe<TripsAggregatorMax>;
};

export type TripsAggregatorAvg = {
  __typename?: 'TripsAggregatorAvg';
  duration?: Maybe<Scalars['Float']>;
  basePrice?: Maybe<Scalars['Float']>;
  basePeopleCount?: Maybe<Scalars['Float']>;
  discount?: Maybe<Scalars['Float']>;
};

export type TripsAggregatorMax = {
  __typename?: 'TripsAggregatorMax';
  duration?: Maybe<Scalars['Float']>;
  basePrice?: Maybe<Scalars['Float']>;
  basePeopleCount?: Maybe<Scalars['Float']>;
  discount?: Maybe<Scalars['Float']>;
};

export type TripsAggregatorMin = {
  __typename?: 'TripsAggregatorMin';
  duration?: Maybe<Scalars['Float']>;
  basePrice?: Maybe<Scalars['Float']>;
  basePeopleCount?: Maybe<Scalars['Float']>;
  discount?: Maybe<Scalars['Float']>;
};

export type TripsAggregatorSum = {
  __typename?: 'TripsAggregatorSum';
  duration?: Maybe<Scalars['Float']>;
  basePrice?: Maybe<Scalars['Float']>;
  basePeopleCount?: Maybe<Scalars['Float']>;
  discount?: Maybe<Scalars['Float']>;
};

export type TripsConnection = {
  __typename?: 'TripsConnection';
  values?: Maybe<Array<Maybe<Trips>>>;
  groupBy?: Maybe<TripsGroupBy>;
  aggregate?: Maybe<TripsAggregator>;
};

export type TripsConnectionActive = {
  __typename?: 'TripsConnectionActive';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<TripsConnection>;
};

export type TripsConnectionBasePeopleCount = {
  __typename?: 'TripsConnectionBasePeopleCount';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<TripsConnection>;
};

export type TripsConnectionBasePrice = {
  __typename?: 'TripsConnectionBasePrice';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<TripsConnection>;
};

export type TripsConnectionCity = {
  __typename?: 'TripsConnectionCity';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<TripsConnection>;
};

export type TripsConnectionCreatedAt = {
  __typename?: 'TripsConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<TripsConnection>;
};

export type TripsConnectionCurrency = {
  __typename?: 'TripsConnectionCurrency';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<TripsConnection>;
};

export type TripsConnectionDescription = {
  __typename?: 'TripsConnectionDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<TripsConnection>;
};

export type TripsConnectionDiscount = {
  __typename?: 'TripsConnectionDiscount';
  key?: Maybe<Scalars['Float']>;
  connection?: Maybe<TripsConnection>;
};

export type TripsConnectionDuration = {
  __typename?: 'TripsConnectionDuration';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<TripsConnection>;
};

export type TripsConnectionHotel = {
  __typename?: 'TripsConnectionHotel';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<TripsConnection>;
};

export type TripsConnectionId = {
  __typename?: 'TripsConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<TripsConnection>;
};

export type TripsConnectionLocale = {
  __typename?: 'TripsConnectionLocale';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<TripsConnection>;
};

export type TripsConnectionName = {
  __typename?: 'TripsConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<TripsConnection>;
};

export type TripsConnectionPartner = {
  __typename?: 'TripsConnectionPartner';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<TripsConnection>;
};

export type TripsConnectionPreviewImage = {
  __typename?: 'TripsConnectionPreviewImage';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<TripsConnection>;
};

export type TripsConnectionPublished_At = {
  __typename?: 'TripsConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<TripsConnection>;
};

export type TripsConnectionTravelType = {
  __typename?: 'TripsConnectionTravelType';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<TripsConnection>;
};

export type TripsConnectionTrip_Type = {
  __typename?: 'TripsConnectionTrip_type';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<TripsConnection>;
};

export type TripsConnectionUpdatedAt = {
  __typename?: 'TripsConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<TripsConnection>;
};

export type TripsConnection_Id = {
  __typename?: 'TripsConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<TripsConnection>;
};

export type TripsGroupBy = {
  __typename?: 'TripsGroupBy';
  id?: Maybe<Array<Maybe<TripsConnectionId>>>;
  _id?: Maybe<Array<Maybe<TripsConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<TripsConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<TripsConnectionUpdatedAt>>>;
  name?: Maybe<Array<Maybe<TripsConnectionName>>>;
  previewImage?: Maybe<Array<Maybe<TripsConnectionPreviewImage>>>;
  active?: Maybe<Array<Maybe<TripsConnectionActive>>>;
  trip_type?: Maybe<Array<Maybe<TripsConnectionTrip_Type>>>;
  description?: Maybe<Array<Maybe<TripsConnectionDescription>>>;
  duration?: Maybe<Array<Maybe<TripsConnectionDuration>>>;
  partner?: Maybe<Array<Maybe<TripsConnectionPartner>>>;
  currency?: Maybe<Array<Maybe<TripsConnectionCurrency>>>;
  city?: Maybe<Array<Maybe<TripsConnectionCity>>>;
  basePrice?: Maybe<Array<Maybe<TripsConnectionBasePrice>>>;
  basePeopleCount?: Maybe<Array<Maybe<TripsConnectionBasePeopleCount>>>;
  discount?: Maybe<Array<Maybe<TripsConnectionDiscount>>>;
  travelType?: Maybe<Array<Maybe<TripsConnectionTravelType>>>;
  hotel?: Maybe<Array<Maybe<TripsConnectionHotel>>>;
  locale?: Maybe<Array<Maybe<TripsConnectionLocale>>>;
  published_at?: Maybe<Array<Maybe<TripsConnectionPublished_At>>>;
};


export type UploadFile = {
  __typename?: 'UploadFile';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  ext?: Maybe<Scalars['String']>;
  mime: Scalars['String'];
  size: Scalars['Float'];
  url: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Morph>>>;
};


export type UploadFileRelatedArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type UploadFileAggregator = {
  __typename?: 'UploadFileAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<UploadFileAggregatorSum>;
  avg?: Maybe<UploadFileAggregatorAvg>;
  min?: Maybe<UploadFileAggregatorMin>;
  max?: Maybe<UploadFileAggregatorMax>;
};

export type UploadFileAggregatorAvg = {
  __typename?: 'UploadFileAggregatorAvg';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMax = {
  __typename?: 'UploadFileAggregatorMax';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMin = {
  __typename?: 'UploadFileAggregatorMin';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorSum = {
  __typename?: 'UploadFileAggregatorSum';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileConnection = {
  __typename?: 'UploadFileConnection';
  values?: Maybe<Array<Maybe<UploadFile>>>;
  groupBy?: Maybe<UploadFileGroupBy>;
  aggregate?: Maybe<UploadFileAggregator>;
};

export type UploadFileConnectionAlternativeText = {
  __typename?: 'UploadFileConnectionAlternativeText';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionCaption = {
  __typename?: 'UploadFileConnectionCaption';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionCreatedAt = {
  __typename?: 'UploadFileConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionExt = {
  __typename?: 'UploadFileConnectionExt';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionFormats = {
  __typename?: 'UploadFileConnectionFormats';
  key?: Maybe<Scalars['JSON']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionHash = {
  __typename?: 'UploadFileConnectionHash';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionHeight = {
  __typename?: 'UploadFileConnectionHeight';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionId = {
  __typename?: 'UploadFileConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionMime = {
  __typename?: 'UploadFileConnectionMime';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionName = {
  __typename?: 'UploadFileConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionPreviewUrl = {
  __typename?: 'UploadFileConnectionPreviewUrl';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionProvider = {
  __typename?: 'UploadFileConnectionProvider';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionProvider_Metadata = {
  __typename?: 'UploadFileConnectionProvider_metadata';
  key?: Maybe<Scalars['JSON']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionSize = {
  __typename?: 'UploadFileConnectionSize';
  key?: Maybe<Scalars['Float']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionUpdatedAt = {
  __typename?: 'UploadFileConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionUrl = {
  __typename?: 'UploadFileConnectionUrl';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionWidth = {
  __typename?: 'UploadFileConnectionWidth';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnection_Id = {
  __typename?: 'UploadFileConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileGroupBy = {
  __typename?: 'UploadFileGroupBy';
  id?: Maybe<Array<Maybe<UploadFileConnectionId>>>;
  _id?: Maybe<Array<Maybe<UploadFileConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<UploadFileConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<UploadFileConnectionUpdatedAt>>>;
  name?: Maybe<Array<Maybe<UploadFileConnectionName>>>;
  alternativeText?: Maybe<Array<Maybe<UploadFileConnectionAlternativeText>>>;
  caption?: Maybe<Array<Maybe<UploadFileConnectionCaption>>>;
  width?: Maybe<Array<Maybe<UploadFileConnectionWidth>>>;
  height?: Maybe<Array<Maybe<UploadFileConnectionHeight>>>;
  formats?: Maybe<Array<Maybe<UploadFileConnectionFormats>>>;
  hash?: Maybe<Array<Maybe<UploadFileConnectionHash>>>;
  ext?: Maybe<Array<Maybe<UploadFileConnectionExt>>>;
  mime?: Maybe<Array<Maybe<UploadFileConnectionMime>>>;
  size?: Maybe<Array<Maybe<UploadFileConnectionSize>>>;
  url?: Maybe<Array<Maybe<UploadFileConnectionUrl>>>;
  previewUrl?: Maybe<Array<Maybe<UploadFileConnectionPreviewUrl>>>;
  provider?: Maybe<Array<Maybe<UploadFileConnectionProvider>>>;
  provider_metadata?: Maybe<Array<Maybe<UploadFileConnectionProvider_Metadata>>>;
};

export type UserInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  confirmationToken?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UserPermissionsPasswordPayload = {
  __typename?: 'UserPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  id: Scalars['ID'];
  username: Scalars['String'];
  email: Scalars['String'];
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<UsersPermissionsMeRole>;
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  type: Scalars['String'];
  controller: Scalars['String'];
  action: Scalars['String'];
  enabled: Scalars['Boolean'];
  policy?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRole>;
};

export type UsersPermissionsRegisterInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<UsersPermissionsPermission>>>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
};


export type UsersPermissionsRolePermissionsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type UsersPermissionsRoleUsersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type UsersPermissionsRoleAggregator = {
  __typename?: 'UsersPermissionsRoleAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UsersPermissionsRoleConnection = {
  __typename?: 'UsersPermissionsRoleConnection';
  values?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  groupBy?: Maybe<UsersPermissionsRoleGroupBy>;
  aggregate?: Maybe<UsersPermissionsRoleAggregator>;
};

export type UsersPermissionsRoleConnectionDescription = {
  __typename?: 'UsersPermissionsRoleConnectionDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionId = {
  __typename?: 'UsersPermissionsRoleConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionName = {
  __typename?: 'UsersPermissionsRoleConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionType = {
  __typename?: 'UsersPermissionsRoleConnectionType';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnection_Id = {
  __typename?: 'UsersPermissionsRoleConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleGroupBy = {
  __typename?: 'UsersPermissionsRoleGroupBy';
  id?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionId>>>;
  _id?: Maybe<Array<Maybe<UsersPermissionsRoleConnection_Id>>>;
  name?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionName>>>;
  description?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionDescription>>>;
  type?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionType>>>;
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  username: Scalars['String'];
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<UsersPermissionsRole>;
};

export type UsersPermissionsUserAggregator = {
  __typename?: 'UsersPermissionsUserAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UsersPermissionsUserConnection = {
  __typename?: 'UsersPermissionsUserConnection';
  values?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  groupBy?: Maybe<UsersPermissionsUserGroupBy>;
  aggregate?: Maybe<UsersPermissionsUserAggregator>;
};

export type UsersPermissionsUserConnectionBlocked = {
  __typename?: 'UsersPermissionsUserConnectionBlocked';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionConfirmed = {
  __typename?: 'UsersPermissionsUserConnectionConfirmed';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionCreatedAt = {
  __typename?: 'UsersPermissionsUserConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionEmail = {
  __typename?: 'UsersPermissionsUserConnectionEmail';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionId = {
  __typename?: 'UsersPermissionsUserConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionProvider = {
  __typename?: 'UsersPermissionsUserConnectionProvider';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionRole = {
  __typename?: 'UsersPermissionsUserConnectionRole';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionUpdatedAt = {
  __typename?: 'UsersPermissionsUserConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionUsername = {
  __typename?: 'UsersPermissionsUserConnectionUsername';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnection_Id = {
  __typename?: 'UsersPermissionsUserConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserGroupBy = {
  __typename?: 'UsersPermissionsUserGroupBy';
  id?: Maybe<Array<Maybe<UsersPermissionsUserConnectionId>>>;
  _id?: Maybe<Array<Maybe<UsersPermissionsUserConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<UsersPermissionsUserConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUpdatedAt>>>;
  username?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUsername>>>;
  email?: Maybe<Array<Maybe<UsersPermissionsUserConnectionEmail>>>;
  provider?: Maybe<Array<Maybe<UsersPermissionsUserConnectionProvider>>>;
  confirmed?: Maybe<Array<Maybe<UsersPermissionsUserConnectionConfirmed>>>;
  blocked?: Maybe<Array<Maybe<UsersPermissionsUserConnectionBlocked>>>;
  role?: Maybe<Array<Maybe<UsersPermissionsUserConnectionRole>>>;
};

export type CreateBookingInput = {
  data?: Maybe<BookingInput>;
};

export type CreateBookingPayload = {
  __typename?: 'createBookingPayload';
  booking?: Maybe<Booking>;
};

export type CreateCityInput = {
  data?: Maybe<CityInput>;
};

export type CreateCityPayload = {
  __typename?: 'createCityPayload';
  city?: Maybe<City>;
};

export type CreateFeatureInput = {
  data?: Maybe<FeatureInput>;
};

export type CreateFeaturePayload = {
  __typename?: 'createFeaturePayload';
  feature?: Maybe<Feature>;
};

export type CreateHotelInput = {
  data?: Maybe<HotelInput>;
};

export type CreateHotelPayload = {
  __typename?: 'createHotelPayload';
  hotel?: Maybe<Hotels>;
};

export type CreateLocationInput = {
  data?: Maybe<LocationInput>;
};

export type CreateLocationPayload = {
  __typename?: 'createLocationPayload';
  location?: Maybe<Location>;
};

export type CreatePartnerInput = {
  data?: Maybe<PartnerInput>;
};

export type CreatePartnerPayload = {
  __typename?: 'createPartnerPayload';
  partner?: Maybe<Partner>;
};

export type CreateReviewInput = {
  data?: Maybe<ReviewInput>;
};

export type CreateReviewPayload = {
  __typename?: 'createReviewPayload';
  review?: Maybe<Review>;
};

export type CreateRoleInput = {
  data?: Maybe<RoleInput>;
};

export type CreateRolePayload = {
  __typename?: 'createRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type CreateSubscriberInput = {
  data?: Maybe<SubscriberInput>;
};

export type CreateSubscriberPayload = {
  __typename?: 'createSubscriberPayload';
  subscriber?: Maybe<Subscribers>;
};

export type CreateTripInput = {
  data?: Maybe<TripInput>;
};

export type CreateTripPayload = {
  __typename?: 'createTripPayload';
  trip?: Maybe<Trips>;
};

export type CreateUserInput = {
  data?: Maybe<UserInput>;
};

export type CreateUserPayload = {
  __typename?: 'createUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type DeleteBookingInput = {
  where?: Maybe<InputId>;
};

export type DeleteBookingPayload = {
  __typename?: 'deleteBookingPayload';
  booking?: Maybe<Booking>;
};

export type DeleteCityInput = {
  where?: Maybe<InputId>;
};

export type DeleteCityPayload = {
  __typename?: 'deleteCityPayload';
  city?: Maybe<City>;
};

export type DeleteFeatureInput = {
  where?: Maybe<InputId>;
};

export type DeleteFeaturePayload = {
  __typename?: 'deleteFeaturePayload';
  feature?: Maybe<Feature>;
};

export type DeleteFileInput = {
  where?: Maybe<InputId>;
};

export type DeleteFilePayload = {
  __typename?: 'deleteFilePayload';
  file?: Maybe<UploadFile>;
};

export type DeleteHotelInput = {
  where?: Maybe<InputId>;
};

export type DeleteHotelPayload = {
  __typename?: 'deleteHotelPayload';
  hotel?: Maybe<Hotels>;
};

export type DeleteLocationInput = {
  where?: Maybe<InputId>;
};

export type DeleteLocationPayload = {
  __typename?: 'deleteLocationPayload';
  location?: Maybe<Location>;
};

export type DeletePartnerInput = {
  where?: Maybe<InputId>;
};

export type DeletePartnerPayload = {
  __typename?: 'deletePartnerPayload';
  partner?: Maybe<Partner>;
};

export type DeleteReviewInput = {
  where?: Maybe<InputId>;
};

export type DeleteReviewPayload = {
  __typename?: 'deleteReviewPayload';
  review?: Maybe<Review>;
};

export type DeleteRoleInput = {
  where?: Maybe<InputId>;
};

export type DeleteRolePayload = {
  __typename?: 'deleteRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type DeleteSubscriberInput = {
  where?: Maybe<InputId>;
};

export type DeleteSubscriberPayload = {
  __typename?: 'deleteSubscriberPayload';
  subscriber?: Maybe<Subscribers>;
};

export type DeleteTripInput = {
  where?: Maybe<InputId>;
};

export type DeleteTripPayload = {
  __typename?: 'deleteTripPayload';
  trip?: Maybe<Trips>;
};

export type DeleteUserInput = {
  where?: Maybe<InputId>;
};

export type DeleteUserPayload = {
  __typename?: 'deleteUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type EditBookingInput = {
  trip?: Maybe<Scalars['ID']>;
  approved?: Maybe<Scalars['Boolean']>;
  basePrice?: Maybe<Scalars['Float']>;
  currency?: Maybe<Enum_Booking_Currency>;
  basePeopleCount?: Maybe<Scalars['Int']>;
  discount?: Maybe<Scalars['Float']>;
  fullName?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  arrivalDate?: Maybe<Scalars['Date']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditCityInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['ID']>;
  locations?: Maybe<Array<Maybe<Scalars['ID']>>>;
  localizations?: Maybe<Array<Maybe<Scalars['ID']>>>;
  locale?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditComponentCoordinateCoordinateInput = {
  id?: Maybe<Scalars['ID']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

export type EditComponentFeatureFeatureInput = {
  id?: Maybe<Scalars['ID']>;
  feature?: Maybe<Scalars['ID']>;
  included?: Maybe<Scalars['Boolean']>;
};

export type EditComponentPricePriceInput = {
  id?: Maybe<Scalars['ID']>;
  basePrice?: Maybe<Scalars['Float']>;
  currency?: Maybe<Enum_Componentpriceprice_Currency>;
  basePeopleCount?: Maybe<Scalars['Int']>;
  extraAdultFee?: Maybe<Scalars['Float']>;
  discount?: Maybe<Scalars['Float']>;
};

export type EditComponentTimelineTimelineInput = {
  id?: Maybe<Scalars['ID']>;
  day?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  locations?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type EditFeatureInput = {
  name?: Maybe<Scalars['String']>;
  info?: Maybe<Scalars['String']>;
  localizations?: Maybe<Array<Maybe<Scalars['ID']>>>;
  locale?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditFileInput = {
  name?: Maybe<Scalars['String']>;
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash?: Maybe<Scalars['String']>;
  ext?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  url?: Maybe<Scalars['String']>;
  previewUrl?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditHotelInput = {
  name?: Maybe<Scalars['String']>;
  stars?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
  trips?: Maybe<Array<Maybe<Scalars['ID']>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditLocaleInput = {
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditLocationInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  images?: Maybe<Array<Maybe<Scalars['ID']>>>;
  city?: Maybe<Scalars['ID']>;
  coordinate?: Maybe<EditComponentCoordinateCoordinateInput>;
  localizations?: Maybe<Array<Maybe<Scalars['ID']>>>;
  locale?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditPartnerInput = {
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  trips?: Maybe<Array<Maybe<Scalars['ID']>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditReviewInput = {
  text?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Float']>;
  author?: Maybe<Scalars['ID']>;
  active?: Maybe<Scalars['Boolean']>;
  trip?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditRoleInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditSubscriberInput = {
  email?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditTripInput = {
  name?: Maybe<Scalars['String']>;
  previewImage?: Maybe<Scalars['ID']>;
  active?: Maybe<Scalars['Boolean']>;
  trip_type?: Maybe<Enum_Trips_Trip_Type>;
  description?: Maybe<Scalars['String']>;
  duration?: Maybe<Scalars['Int']>;
  partner?: Maybe<Scalars['ID']>;
  currency?: Maybe<Enum_Trips_Currency>;
  city?: Maybe<Scalars['ID']>;
  features?: Maybe<Array<Maybe<EditComponentFeatureFeatureInput>>>;
  basePrice?: Maybe<Scalars['Int']>;
  basePeopleCount?: Maybe<Scalars['Int']>;
  discount?: Maybe<Scalars['Float']>;
  travelType?: Maybe<Enum_Trips_Traveltype>;
  hotel?: Maybe<Scalars['ID']>;
  plan?: Maybe<Array<Maybe<EditComponentTimelineTimelineInput>>>;
  localizations?: Maybe<Array<Maybe<Scalars['ID']>>>;
  locale?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditUserInput = {
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  confirmationToken?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UpdateBookingInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditBookingInput>;
};

export type UpdateBookingPayload = {
  __typename?: 'updateBookingPayload';
  booking?: Maybe<Booking>;
};

export type UpdateCityInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditCityInput>;
};

export type UpdateCityPayload = {
  __typename?: 'updateCityPayload';
  city?: Maybe<City>;
};

export type UpdateFeatureInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditFeatureInput>;
};

export type UpdateFeaturePayload = {
  __typename?: 'updateFeaturePayload';
  feature?: Maybe<Feature>;
};

export type UpdateHotelInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditHotelInput>;
};

export type UpdateHotelPayload = {
  __typename?: 'updateHotelPayload';
  hotel?: Maybe<Hotels>;
};

export type UpdateLocationInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditLocationInput>;
};

export type UpdateLocationPayload = {
  __typename?: 'updateLocationPayload';
  location?: Maybe<Location>;
};

export type UpdatePartnerInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditPartnerInput>;
};

export type UpdatePartnerPayload = {
  __typename?: 'updatePartnerPayload';
  partner?: Maybe<Partner>;
};

export type UpdateReviewInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditReviewInput>;
};

export type UpdateReviewPayload = {
  __typename?: 'updateReviewPayload';
  review?: Maybe<Review>;
};

export type UpdateRoleInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditRoleInput>;
};

export type UpdateRolePayload = {
  __typename?: 'updateRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type UpdateSubscriberInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditSubscriberInput>;
};

export type UpdateSubscriberPayload = {
  __typename?: 'updateSubscriberPayload';
  subscriber?: Maybe<Subscribers>;
};

export type UpdateTripInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditTripInput>;
};

export type UpdateTripPayload = {
  __typename?: 'updateTripPayload';
  trip?: Maybe<Trips>;
};

export type UpdateUserInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditUserInput>;
};

export type UpdateUserPayload = {
  __typename?: 'updateUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type CreateBookingQueryMutationVariables = Exact<{
  tripId: Scalars['ID'];
  fullName: Scalars['String'];
  basePrice: Scalars['Float'];
  discount?: Maybe<Scalars['Float']>;
  basePeopleCount: Scalars['Int'];
  phone: Scalars['String'];
  arrivalDate: Scalars['Date'];
  message?: Maybe<Scalars['String']>;
  currency: Enum_Booking_Currency;
}>;


export type CreateBookingQueryMutation = (
  { __typename?: 'Mutation' }
  & { createBooking?: Maybe<(
    { __typename?: 'createBookingPayload' }
    & { booking?: Maybe<(
      { __typename?: 'Booking' }
      & Pick<Booking, 'message'>
    )> }
  )> }
);

export type CitiesQueryVariables = Exact<{
  limit?: Maybe<Scalars['Int']>;
  locale?: Maybe<Scalars['String']>;
}>;


export type CitiesQuery = (
  { __typename?: 'Query' }
  & { cities?: Maybe<Array<Maybe<(
    { __typename?: 'City' }
    & CityInfoFragment
  )>>> }
);

export type GetCityQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetCityQuery = (
  { __typename?: 'Query' }
  & { city?: Maybe<(
    { __typename?: 'City' }
    & CityInfoFragment
  )> }
);

export type GetLocalizedCityQueryVariables = Exact<{
  id: Scalars['ID'];
  locale: Scalars['String'];
}>;


export type GetLocalizedCityQuery = (
  { __typename?: 'Query' }
  & { cities?: Maybe<Array<Maybe<(
    { __typename?: 'City' }
    & CityInfoFragment
  )>>> }
);

export type CityInfoFragment = (
  { __typename?: 'City' }
  & Pick<City, 'id' | 'name' | 'description' | 'locale'>
  & { localizations?: Maybe<Array<Maybe<(
    { __typename?: 'City' }
    & Pick<City, 'id' | 'locale'>
  )>>>, image?: Maybe<(
    { __typename?: 'UploadFile' }
    & Pick<UploadFile, 'id' | 'width' | 'height' | 'url' | 'formats'>
  )> }
);

export type FeaturesQueryVariables = Exact<{
  locale: Scalars['String'];
}>;


export type FeaturesQuery = (
  { __typename?: 'Query' }
  & { features?: Maybe<Array<Maybe<(
    { __typename?: 'Feature' }
    & Pick<Feature, 'name'>
  )>>> }
);

export type GetLocationsQueryVariables = Exact<{
  locale: Scalars['String'];
  ids: Array<Scalars['String']> | Scalars['String'];
}>;


export type GetLocationsQuery = (
  { __typename?: 'Query' }
  & { locations?: Maybe<Array<Maybe<(
    { __typename?: 'Location' }
    & Pick<Location, 'id' | 'name' | 'description' | 'locale'>
    & { coordinate?: Maybe<(
      { __typename?: 'ComponentCoordinateCoordinate' }
      & Pick<ComponentCoordinateCoordinate, 'latitude' | 'longitude'>
    )>, images?: Maybe<Array<Maybe<(
      { __typename?: 'UploadFile' }
      & Pick<UploadFile, 'id' | 'width' | 'height' | 'url' | 'formats'>
    )>>>, city?: Maybe<(
      { __typename?: 'City' }
      & Pick<City, 'id' | 'name' | 'description' | 'locale'>
      & { localizations?: Maybe<Array<Maybe<(
        { __typename?: 'City' }
        & Pick<City, 'id' | 'locale'>
      )>>>, image?: Maybe<(
        { __typename?: 'UploadFile' }
        & Pick<UploadFile, 'id' | 'width' | 'height' | 'url' | 'formats'>
      )> }
    )> }
  )>>> }
);

export type AddToNewsLetterMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type AddToNewsLetterMutation = (
  { __typename?: 'Mutation' }
  & { createSubscriber?: Maybe<(
    { __typename?: 'createSubscriberPayload' }
    & { subscriber?: Maybe<(
      { __typename?: 'Subscribers' }
      & Pick<Subscribers, 'email'>
    )> }
  )> }
);

export type TripsQueryVariables = Exact<{
  limit?: Maybe<Scalars['Int']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<Scalars['JSON']>;
}>;


export type TripsQuery = (
  { __typename?: 'Query' }
  & { trips?: Maybe<Array<Maybe<(
    { __typename?: 'Trips' }
    & TripInfoFragment
  )>>> }
);

export type GetTripQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetTripQuery = (
  { __typename?: 'Query' }
  & { trip?: Maybe<(
    { __typename?: 'Trips' }
    & TripInfoFragment
  )> }
);

export type GetLocalizedTripQueryVariables = Exact<{
  id: Scalars['ID'];
  locale: Scalars['String'];
}>;


export type GetLocalizedTripQuery = (
  { __typename?: 'Query' }
  & { trips?: Maybe<Array<Maybe<(
    { __typename?: 'Trips' }
    & TripInfoFragment
  )>>> }
);

export type TripInfoFragment = (
  { __typename?: 'Trips' }
  & Pick<Trips, 'id' | 'name' | 'active' | 'description' | 'locale' | 'trip_type' | 'duration' | 'travelType' | 'basePrice' | 'discount' | 'currency' | 'basePeopleCount'>
  & { city?: Maybe<(
    { __typename?: 'City' }
    & Pick<City, 'id' | 'name'>
  )>, hotel?: Maybe<(
    { __typename?: 'Hotels' }
    & Pick<Hotels, 'id' | 'name' | 'url' | 'stars'>
  )>, plan?: Maybe<Array<Maybe<(
    { __typename?: 'ComponentTimelineTimeline' }
    & Pick<ComponentTimelineTimeline, 'day'>
    & { locations?: Maybe<Array<Maybe<(
      { __typename?: 'Location' }
      & Pick<Location, 'id' | 'name'>
      & { city?: Maybe<(
        { __typename?: 'City' }
        & Pick<City, 'id'>
      )> }
    )>>> }
  )>>>, previewImage?: Maybe<(
    { __typename?: 'UploadFile' }
    & Pick<UploadFile, 'id' | 'width' | 'height' | 'url' | 'formats'>
  )>, localizations?: Maybe<Array<Maybe<(
    { __typename?: 'Trips' }
    & Pick<Trips, 'id' | 'locale'>
  )>>>, features?: Maybe<Array<Maybe<(
    { __typename?: 'ComponentFeatureFeature' }
    & Pick<ComponentFeatureFeature, 'included'>
    & { feature?: Maybe<(
      { __typename?: 'Feature' }
      & Pick<Feature, 'name' | 'info'>
    )> }
  )>>> }
);

export const CityInfoFragmentDoc = gql`
    fragment CityInfo on City {
  id
  name
  description
  locale
  localizations {
    id
    locale
  }
  image {
    id
    width
    height
    url
    formats
  }
}
    `;
export const TripInfoFragmentDoc = gql`
    fragment tripInfo on Trips {
  id
  name
  active
  description
  locale
  trip_type
  duration
  travelType
  city {
    id
    name
  }
  hotel {
    id
    name
    url
    stars
  }
  plan {
    day
    locations {
      id
      name
      city {
        id
      }
    }
  }
  previewImage {
    id
    width
    height
    url
    formats
  }
  localizations {
    id
    locale
  }
  basePrice
  discount
  currency
  basePeopleCount
  features {
    included
    feature {
      name
      info
    }
  }
}
    `;
export const CreateBookingQueryDocument = gql`
    mutation createBookingQuery($tripId: ID!, $fullName: String!, $basePrice: Float!, $discount: Float = 0, $basePeopleCount: Int!, $phone: String!, $arrivalDate: Date!, $message: String, $currency: ENUM_BOOKING_CURRENCY!) {
  createBooking(
    input: {data: {trip: $tripId, basePrice: $basePrice, discount: $discount, message: $message, fullName: $fullName, basePeopleCount: $basePeopleCount, phone: $phone, arrivalDate: $arrivalDate, currency: $currency}}
  ) {
    booking {
      message
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateBookingQueryGQL extends Apollo.Mutation<CreateBookingQueryMutation, CreateBookingQueryMutationVariables> {
    document = CreateBookingQueryDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CitiesDocument = gql`
    query cities($limit: Int, $locale: String) {
  cities(limit: $limit, locale: $locale) {
    ...CityInfo
  }
}
    ${CityInfoFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class CitiesGQL extends Apollo.Query<CitiesQuery, CitiesQueryVariables> {
    document = CitiesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetCityDocument = gql`
    query getCity($id: ID!) {
  city(id: $id) {
    ...CityInfo
  }
}
    ${CityInfoFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetCityGQL extends Apollo.Query<GetCityQuery, GetCityQueryVariables> {
    document = GetCityDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetLocalizedCityDocument = gql`
    query getLocalizedCity($id: ID!, $locale: String!) {
  cities(locale: $locale, where: {_or: [{localizations: {id: $id}}, {id: $id}]}) {
    ...CityInfo
  }
}
    ${CityInfoFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetLocalizedCityGQL extends Apollo.Query<GetLocalizedCityQuery, GetLocalizedCityQueryVariables> {
    document = GetLocalizedCityDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const FeaturesDocument = gql`
    query features($locale: String!) {
  features(locale: $locale) {
    name
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class FeaturesGQL extends Apollo.Query<FeaturesQuery, FeaturesQueryVariables> {
    document = FeaturesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetLocationsDocument = gql`
    query getLocations($locale: String!, $ids: [String!]!) {
  locations(locale: $locale, where: {id_in: $ids}) {
    id
    name
    description
    coordinate {
      latitude
      longitude
    }
    locale
    images {
      id
      width
      height
      url
      formats
    }
    city {
      id
      name
      description
      locale
      localizations {
        id
        locale
      }
      image {
        id
        width
        height
        url
        formats
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetLocationsGQL extends Apollo.Query<GetLocationsQuery, GetLocationsQueryVariables> {
    document = GetLocationsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const AddToNewsLetterDocument = gql`
    mutation addToNewsLetter($email: String!) {
  createSubscriber(input: {data: {email: $email}}) {
    subscriber {
      email
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AddToNewsLetterGQL extends Apollo.Mutation<AddToNewsLetterMutation, AddToNewsLetterMutationVariables> {
    document = AddToNewsLetterDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const TripsDocument = gql`
    query trips($limit: Int = 10, $locale: String = "en", $where: JSON) {
  trips(limit: $limit, locale: $locale, where: $where) {
    ...tripInfo
  }
}
    ${TripInfoFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class TripsGQL extends Apollo.Query<TripsQuery, TripsQueryVariables> {
    document = TripsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetTripDocument = gql`
    query getTrip($id: ID!) {
  trip(id: $id) {
    ...tripInfo
  }
}
    ${TripInfoFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetTripGQL extends Apollo.Query<GetTripQuery, GetTripQueryVariables> {
    document = GetTripDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetLocalizedTripDocument = gql`
    query getLocalizedTrip($id: ID!, $locale: String!) {
  trips(locale: $locale, where: {_or: [{localizations: {id: $id}}, {id: $id}]}) {
    ...tripInfo
  }
}
    ${TripInfoFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetLocalizedTripGQL extends Apollo.Query<GetLocalizedTripQuery, GetLocalizedTripQueryVariables> {
    document = GetLocalizedTripDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }