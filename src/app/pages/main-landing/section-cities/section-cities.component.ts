import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { longX } from 'src/app/data/abstract/longX';
import { CityModel } from 'src/app/data/models/CityModel';
import { CityService } from 'src/app/data/services/city.service';
import { DevData } from 'src/app/data/static/main-info';

@Component({
  selector: 'app-section-cities',
  templateUrl: './section-cities.component.html',
  styleUrls: ['./section-cities.component.scss'],
})
export class SectionCitiesComponent extends longX implements OnDestroy {
  cities: CityModel[];
  sub: Subscription;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    super();
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngOnInit() {
    this.sub = this.activatedRoute.data.subscribe((data) => {
      this.cities = data.initData.cities;
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
