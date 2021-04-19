import { Injectable } from '@angular/core';
import { UserTripsModel } from '../models/UserTripsModel';
import { TripService } from './trip.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  _userTrips: UserTripsModel[] = [
    new UserTripsModel(
      '111',
      'sss',
      'https://i.guim.co.uk/img/media/208d00c732eeed823ec55afe35faf252843e0c59/0_47_2520_1512/master/2520.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=2afc817c2c585aa9342fa808b7b4decd',
      10,
      'istanbul',
      200,
      '$',
      0
    ),
    new UserTripsModel(
      '111',
      'sss',
      'https://i.guim.co.uk/img/media/208d00c732eeed823ec55afe35faf252843e0c59/0_47_2520_1512/master/2520.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=2afc817c2c585aa9342fa808b7b4decd',
      10,
      'istanbul',
      200,
      '$',
      0
    ),
    new UserTripsModel(
      '111',
      'sss',
      'https://i.guim.co.uk/img/media/208d00c732eeed823ec55afe35faf252843e0c59/0_47_2520_1512/master/2520.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=2afc817c2c585aa9342fa808b7b4decd',
      10,
      'istanbul',
      200,
      '$',
      0
    ),
    new UserTripsModel(
      '111',
      'sss',
      'https://i.guim.co.uk/img/media/208d00c732eeed823ec55afe35faf252843e0c59/0_47_2520_1512/master/2520.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=2afc817c2c585aa9342fa808b7b4decd',
      10,
      'istanbul',
      200,
      '$',
      0
    ),
  ];
  get trips(): UserTripsModel[] {
    return this._userTrips;
  }
  constructor(public _ser: TripService) {
    this.initUserTrips();
  }

  initUserTrips() {
    //TODO fetch from http
    // this._trips.push(...this._ser.offers);
  }

  get pasTrips(): UserTripsModel[] {
    return this.trips.filter((d) => d.isPastTrip);
  }
}
