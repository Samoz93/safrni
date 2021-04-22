import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TripModel } from 'src/app/data/models/TripModel';
import { DevData } from 'src/app/data/static/main-info';

@Component({
  selector: 'app-trip-card',
  templateUrl: './single-trip-card.component.html',
  styleUrls: ['./single-trip-card.component.scss'],
})
export class SingleTripCardComponent implements OnInit {
  @Input() trip: TripModel;
  @Input() isSingleTrip: boolean = false;
  @Input() width: string = '30rem';
  @Input() height: string = '50rem';
  constructor(private router: Router, private activeRoute: ActivatedRoute) {}

  ngOnInit(): void {}

  goToOffer() {
    this.router.navigate([DevData.tourInfoRoute, this.trip.id]);
  }
}
