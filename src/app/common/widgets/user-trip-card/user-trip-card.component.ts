import { Component, Input, OnInit } from '@angular/core';
import { UserTripsModel } from 'src/app/data/models/UserTripsModel';

@Component({
  selector: 'app-user-trip-card',
  templateUrl: './user-trip-card.component.html',
  styleUrls: ['./user-trip-card.component.scss'],
})
export class UserTripCardComponent implements OnInit {
  @Input() trip: UserTripsModel;

  constructor() {}

  ngOnInit(): void {}
}
