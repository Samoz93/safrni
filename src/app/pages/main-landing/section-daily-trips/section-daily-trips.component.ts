import { Component, HostListener, OnInit } from '@angular/core';
import { TripService } from 'src/app/data/services/trip.service';

@Component({
  selector: 'app-section-daily-trips',
  templateUrl: './section-daily-trips.component.html',
  styleUrls: ['./section-daily-trips.component.scss'],
})
export class SectionDailyTripsComponent implements OnInit {
  constructor(public _ser: TripService) {}
  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
  }
  innerWidth = 0;
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.innerWidth = window.innerWidth;
  }
}
