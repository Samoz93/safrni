export class StaticInfo {
  static projectName = 'سفرني';
  static phoneNumber = '90 537 695 8305';
  static email = 'Saferni@emali.com';
  static defaultImage = '/assets/images/placeholder/default.jpeg';
  static baseUrl = 'http://www.saferni.xyz';
  static location = '';

  //settings
  static LOADER_MINIMUM_INTERVAL = 0;
  //routing
  static offersRoute = 'offers';
  static bookingRoute = 'booking';
  static tourInfoRoute = 'tours';
}
export class DevData {
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
