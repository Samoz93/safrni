import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TripModel } from 'src/app/data/models/TripModel';
import { TripService } from 'src/app/data/services/trip.service';

@Component({
  selector: 'app-section-offers',
  templateUrl: './section-offers.component.html',
  styleUrls: ['./section-offers.component.scss'],
})
export class SectionOffersComponent implements OnInit {
  trips$: Observable<TripModel[]>;
  constructor(private _ser: TripService) {}
  ngOnInit() {
    this.trips$ = this._ser.landingObservable$;
  }
}
