import { Component, OnInit } from '@angular/core';
import { Subscription, zip } from 'rxjs';
import { CityService } from './data/services/city.service';
import { TripService } from './data/services/trip.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'safrni';
  isLoading = true;
  sub: Subscription;
  constructor(private _tripSer: TripService, private _citiesSer: CityService) {}
  ngOnInit(): void {
    this._tripSer.fetchAllData('/trips');
    this._citiesSer.fetchAllData('/cities');
    this.sub = zip(
      this._tripSer.loadingState$,
      this._citiesSer.loadingState$
    ).subscribe((f) => {
      this.isLoading = !f.every((g) => !g.isLoading);
    });
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.sub.unsubscribe();
  }
}
