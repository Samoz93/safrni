import { Component, OnInit } from '@angular/core';
import { UserTripsModel } from 'src/app/data/models/UserTripsModel';
import { UserService } from 'src/app/data/services/user.service';

@Component({
  selector: 'app-user-trips',
  templateUrl: './user-trips.component.html',
  styleUrls: ['./user-trips.component.scss'],
})
export class UserTripsComponent implements OnInit {
  trips: UserTripsModel[] = [];
  constructor(public ser: UserService) {}

  ngOnInit(): void {
    this.trips = [];
    this.trips.push(...this.ser.trips);
  }
}
