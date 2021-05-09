export class StaticInfo {
  static projectName = 'Saferni';
  static phoneNumber = '90 537 695 8305';
  static Email = 'Saferni@emali.com';
  static baseUrl = 'http://saferni.xyz';
  static defaultImage = '/assets/images/placeholder/default.jpeg';
}
export class StaticSettings {
  static LOADER_MINIMUM_INTERVAL = 0;
}
export class DevData {
  static baseUrl = 'http://www.saferni.xyz/';
  static isDev = false;
  static offersRoute = 'offers';
  static bookingRoute = 'booking';
  static tourInfoRoute = 'tours';

  static errMsgs = [
    {
      name: 'required',
      msg: 'this field is required',
    },
  ];
}

export interface LoadingState {
  msg: string;
  isLoading: boolean;
  hasError: boolean;
}
export enum EndPoints {
  trips = 'trips',
  cities = 'cities',
}
export enum FeatureEnum {
  Hotel = 'Hotel',
  shuttle = 'shuttle',
}
export enum CitiesEnum {
  Istanbul = 'Istanbul',
  Bursa = 'Bursa',
  Trabzon = 'Trabzon',
}
export enum TABS {
  tour = 'tour',
  medic = 'medic',
}
