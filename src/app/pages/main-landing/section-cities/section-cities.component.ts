import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { longX } from 'src/app/data/abstract/longX';
import { CitiesService } from 'src/app/data/services/cities.service';
import { DevData } from 'src/app/data/static/main-info';
import { map, take } from 'rxjs/operators';
import { Observable, ReplaySubject } from 'rxjs';
import { City } from 'src/app/data/models/CitiesModel';

@Component({
  selector: 'app-section-cities',
  templateUrl: './section-cities.component.html',
  styleUrls: ['./section-cities.component.scss'],
})
export class SectionCitiesComponent extends longX implements OnInit {
  $data: Observable<City[]>;
  constructor(private router: Router, public _ser: CitiesService) {
    super();
  }

  ngOnInit(): void {
    this.$data = this._ser.data$.pipe(map((f) => f.slice(0, 7)));
  }

  goToOffer(cityId: any) {
    this.router.navigate([DevData.offersRoute, cityId]);
  }
  get lnth() {
    return this._ser.data.length;
  }
  isLongX(index: number) {
    // return innerWidth > 1625
    //   ? (this.lnth - 1) % 3 == 0 && this.lnth - 1 == index
    //   : this.lnth % 2 != 0 && index == 0;

    return (this.lnth - 1) % 3 == 0 && this.lnth - 1 == index;
  }
}
