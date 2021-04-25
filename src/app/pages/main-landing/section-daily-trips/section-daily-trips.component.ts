import { Component, HostListener, OnInit } from '@angular/core';
import { longX } from 'src/app/data/abstract/longX';
import { TripService } from 'src/app/data/services/trip.service';

@Component({
  selector: 'app-section-daily-trips',
  templateUrl: './section-daily-trips.component.html',
  styleUrls: ['./section-daily-trips.component.scss'],
})
export class SectionDailyTripsComponent extends longX implements OnInit {
  constructor(public _ser: TripService) {
    super();
  }
  ngOnInit(): void {}

  get slideCount(): number {
    const x = this.innerWidth / 16 / 40;
    return x > 3 ? 3 : x;
  }
}
