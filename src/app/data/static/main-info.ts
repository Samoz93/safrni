export class StaticInfo {
  static projectName = 'prName';
  static phoneNumber = '+90 539 961 0531';
  static email = 'saferni@emali.com';
  static defaultImage = '/assets/images/placeholder/default.jpeg';
  static insta = 'safernit';
  static facebook = 'Saferni-104348928523570';
  static twitter = 'saferni@emali.com';

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
  msg: any;
  isLoading: boolean;
  hasError: boolean;
  handler?: Function;
}
