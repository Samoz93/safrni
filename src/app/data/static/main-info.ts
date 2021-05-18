export class StaticInfo {
  static projectName = 'prName';
  static phoneNumber = '+90 534 661 0531';
  static email = 'saferni@emali.com';
  static defaultImage = '/assets/images/placeholder/default.jpeg';

  static location = 'Istanbul - Turkey';

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
  handler?: Function;
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
