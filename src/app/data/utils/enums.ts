import { LocalService } from '../services/local.service';
import { Enum_Trips_Traveltype } from '../services/saferniGraphql.service';

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
  price = 'local_offer',
  directions_car = 'directions_car',
}

export enum snackType {
  error = 'error',
  info = 'report',
  warn = 'lightbulb',
  succes = 'check_circle',
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

export const getTravelTypeData = (
  locale: LocalService
): { id: string; name: string }[] => {
  return [
    {
      id: Enum_Trips_Traveltype.Private,
      name: locale.getTranslation(
        `travelType.${Enum_Trips_Traveltype.Private}`
      ),
    },
    {
      id: Enum_Trips_Traveltype.Public,
      name: locale.getTranslation(`travelType.${Enum_Trips_Traveltype.Public}`),
    },
  ];
};

export enum WINDOW_SIZE {
  small = 500,
  medium = 750,
  large = 1000,
  thumb = 499,
}
