import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { TripModel } from 'src/app/data/models/TripModel';
import { TripService } from 'src/app/data/services/trip.service';

@Component({
  selector: 'app-section-offers',
  templateUrl: './section-offers.component.html',
  styleUrls: ['./section-offers.component.scss'],
})
export class SectionOffersComponent implements OnInit {
  trips: TripModel[];
  constructor(private activatedRoute: ActivatedRoute) {}
  ngOnInit() {
    this.trips = this.activatedRoute.snapshot.data.initData.trips;
  }
}
