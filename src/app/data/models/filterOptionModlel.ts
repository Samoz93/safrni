import { TABS } from '../static/main-info';

export interface FilterOptionsModel {
  type: TABS;
  adult: number;
  child: number;
  minPrice: number;
  maxPrice: number;
  cityId: string;
}
