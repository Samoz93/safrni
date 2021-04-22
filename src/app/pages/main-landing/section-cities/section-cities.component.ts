import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CitiesService } from 'src/app/data/services/cities.service';
import { TripService } from 'src/app/data/services/trip.service';
import { DevData } from 'src/app/data/static/main-info';

@Component({
  selector: 'app-section-cities',
  templateUrl: './section-cities.component.html',
  styleUrls: ['./section-cities.component.scss'],
})
export class SectionCitiesComponent implements OnInit {
  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    public _ser: CitiesService
  ) {}

  ngOnInit(): void {}

  goToOffer(cityId: any) {
    this.router.navigate([DevData.offersRoute, cityId]);
  }
}
