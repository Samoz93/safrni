import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DevData } from 'src/app/data/static/main-info';
import { map, take } from 'rxjs/operators';
import { Observable, ReplaySubject } from 'rxjs';
import { Subscription } from 'rxjs';
import { longX } from 'src/app/data/abstract/longX';
import { CityModel } from 'src/app/data/models/CityModel';
import { CityService } from 'src/app/data/services/city.service';

@Component({
  selector: 'app-section-cities',
  templateUrl: './section-cities.component.html',
  styleUrls: ['./section-cities.component.scss'],
})
export class SectionCitiesComponent implements OnInit {
  data: CityModel[] = [];
  constructor(private router: Router, public _ser: CityService) {}

  ngOnInit(): void {
    this._init();
  }
  async _init() {
    await this._ser.init();
    this.data = this._ser.data.slice(0, 7);
  }
  goToOffer(cityId: any) {
    this.router.navigate([DevData.offersRoute, cityId]);
  }
}
