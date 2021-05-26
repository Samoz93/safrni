import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  cities: CityModel[];
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}
  ngOnInit(): void {
    this.cities = this.activatedRoute.snapshot.data.initData.cities.slice(0, 6);
  }
}
