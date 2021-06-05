import { Injectable } from '@angular/core';
import { CityService } from './city.service';
import { TripService } from './trip.service';

@Injectable({
  providedIn: 'root',
})
export class HomePageService {
  constructor(private tripSer: TripService, private citySer: CityService) {}
}
