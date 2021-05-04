import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { longX } from 'src/app/data/abstract/longX';
import { CityModel } from 'src/app/data/models/CityModel';
import { CityService } from 'src/app/data/services/city.service';
import { DevData } from 'src/app/data/static/main-info';

@Component({
  selector: 'app-section-cities',
  templateUrl: './section-cities.component.html',
  styleUrls: ['./section-cities.component.scss'],
})
export class SectionCitiesComponent extends longX implements OnInit {
  cities: CityModel[];
  isLoading: boolean;

  constructor(private router: Router, public _ser: CityService) {
    super();
    this.cities = [];
    this.isLoading = true;
  }

  ngOnInit(): void {
    this._ser.getCities().subscribe((cities) => {
      console.log(cities);

      this.cities = cities;
      this.isLoading = false;
    });
  }

  goToOffer(cityId: any) {
    this.router.navigate([DevData.offersRoute, cityId]);
  }
  get lnth() {
    return this.cities.length;
  }
  isLongX(index: number) {
    return innerWidth > 1625
      ? (this.lnth - 1) % 3 == 0 && this.lnth - 1 == index
      : this.lnth % 2 != 0 && index == 0;
  }
}
