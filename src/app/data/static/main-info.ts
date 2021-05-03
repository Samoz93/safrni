export class StaticInfo {
  static projectName = 'Saferni';
  static phoneNumber = '90 537 695 8305';
  static Email = 'Saferni@emali.com';
  static baseUrl = 'saferni.xyz';
}
export class DevData {
  static baseUrl = 'http://localhost:1337/';
  static isDev = false;
  static offersRoute = 'offers';
  static bookingRoute = 'booking';
  static tourInfoRoute = 'tourInfo';

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
