export class StaticInfo {
  static projectName = 'Saferni';
  static phoneNumber = '90 537 695 8305';
  static Email = 'Saferni@emali.com';
}
export class DevData {
  static baseUrl = 'http://165.22.85.57';
  static offersRoute = 'offers';
  static bookingRoute = 'booking';
  static tourInfoRoute = 'tourInfo';
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
