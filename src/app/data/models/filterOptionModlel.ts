import {
  Enum_Trips_Traveltype,
  Enum_Trips_Trip_Type,
} from '../services/saferniGraphql.service';

export interface FilterOptionsModel {
  tripType: Enum_Trips_Trip_Type;
  minPrice: number;
  maxPrice: number;
  date?: number;
  travelType?: Enum_Trips_Traveltype;
  hotel?: boolean;
  hasDiscount?: boolean;
  cities?: string[];
  limit?: number;
  locale?: string;
  search?: string;
}
