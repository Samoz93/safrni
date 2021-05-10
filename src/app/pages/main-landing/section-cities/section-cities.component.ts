import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CityModel } from 'src/app/data/models/CityModel';
import { CityService } from 'src/app/data/services/city.service';
import { StaticInfo } from 'src/app/data/static/main-info';

@Component({
  selector: 'app-section-cities',
  templateUrl: './section-cities.component.html',
  styleUrls: ['./section-cities.component.scss'],
})
export class SectionCitiesComponent implements OnInit {
  cities$: Observable<CityModel[]>;
  constructor(private router: Router, private _ser: CityService) {}
  ngOnInit(): void {
    this._ser.init();

    this.cities$ = this._ser.data$;
  }
  goToOffer(cityId: any) {
    this.router.navigate([StaticInfo.offersRoute, cityId]);
  }
}
