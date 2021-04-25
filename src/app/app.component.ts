import { Component } from '@angular/core';
import { Subscription, zip } from 'rxjs';
import { CitiesService } from './data/services/cities.service';
import { TripService } from './data/services/trip.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'safrni';
  isLoading = true;
  sub: Subscription;
  constructor(
    private _tripSer: TripService,
    private _citiesSer: CitiesService
  ) {
    this.sub = zip(_tripSer.loadingState$, _citiesSer.loadingState$).subscribe(
      (f) => {
        this.isLoading = f.every((g) => g.isLoading);
      }
    );
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.sub.unsubscribe();
  }
}
