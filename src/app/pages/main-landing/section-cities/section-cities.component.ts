import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DevData } from 'src/app/data/static/main-info';
import { map, take } from 'rxjs/operators';
import { Observable, ReplaySubject } from 'rxjs';
import { CityModel } from 'src/app/data/models/CityModel';
import { CityService } from 'src/app/data/services/city.service';

@Component({
  selector: 'app-section-cities',
  templateUrl: './section-cities.component.html',
  styleUrls: ['./section-cities.component.scss'],
})
export class SectionCitiesComponent implements OnInit {
  $data: Observable<CityModel[]>;
  constructor(private router: Router, public _ser: CityService) {}

  ngOnInit(): void {
    this.$data = this._ser.data$.pipe(map((f) => f.slice(0, 7)));
  }

  goToOffer(cityId: any) {
    this.router.navigate([DevData.offersRoute, cityId]);
  }
}
