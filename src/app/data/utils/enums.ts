import { LocalService } from '../services/local.service';

export enum LoginEnum {
  login,
  signup,
  privacy,
}
export enum ProfileEnum {
  profile = 'Profile',
  trips = 'Trips',
  security = 'Security',
}

export enum ICONS {
  mode_edit = 'mode_edit',
  profile = 'person',
  phone = 'call',
  mail = 'mail',
  calendar = 'date_range',
  country = 'flag',
  title = 'title',
  pass = 'lock',
  ticket = 'confirmation_number',
  compass = 'explore',
  work = 'work',
  message = 'message',
}

export enum snackType {
  error = 'error',
  info = 'report',
  warn = 'lightbulb',
  succes = 'check_circle',
}
export enum TravelTypes {
  public = 'public',
  private = 'private',
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

export const getTravelTypeData = (
  locale: LocalService
): { id: string; name: string }[] => {
  return [
    {
      id: TravelTypes.private,
      name: locale.getTranslation(`travelType.${TravelTypes.private}`),
    },
    {
      id: TravelTypes.public,
      name: locale.getTranslation(`travelType.${TravelTypes.public}`),
    },
  ];
};
