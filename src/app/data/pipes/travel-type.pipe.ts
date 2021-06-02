import { Pipe, PipeTransform } from '@angular/core';
import { TripModel } from '../models/TripModel';
import { Enum_Trips_Traveltype } from '../services/saferniGraphql.service';

@Pipe({
  name: 'travelType',
})
export class TravelTypePipe implements PipeTransform {
  transform(value: TripModel, ...args: unknown[]): string {
    if (value.travelType === Enum_Trips_Traveltype.Private)
      return 'general.privateTour';
    else return 'general.publicTour';
  }
}
