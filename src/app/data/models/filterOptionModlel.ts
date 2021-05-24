import { TABS, TravelTypes } from '../utils/enums';

export interface FilterOptionsModel {
  tab: TABS;
  minPrice: number;
  maxPrice: number;
  cityId: string;
  date?: number;
  travelType: TravelTypes;
  hasHotel?: boolean;
  cities?: any[];
}
