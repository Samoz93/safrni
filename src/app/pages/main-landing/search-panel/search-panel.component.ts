import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StaticInfo } from 'src/app/data/static/main-info';
import { getTravelTypeData, ICONS } from 'src/app/data/utils/enums';
import { LocalService } from 'src/app/data/services/local.service';
import { Observable } from 'rxjs';
import { CityService } from 'src/app/data/services/city.service';
import { ActivatedRoute, Router } from '@angular/router';
import { QueryStringParameters } from 'src/app/data/abstract/query.string.builder';
import { FilterOptionsModel } from 'src/app/data/models/filterOptionModlel';
import { ErrorService } from 'src/app/data/services/error.service';
import {
  Enum_Trips_Traveltype,
  Enum_Trips_Trip_Type,
} from 'src/app/data/services/saferniGraphql.service';
import { HomeBanner } from 'src/app/data/services/saferniGraphql.service';
import { HomeBannerService } from 'src/app/data/services/home.banner.service';


@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.scss'],
})
export class SearchPanelComponent implements OnInit {
  ticketRipped = false;

  selctedTrip: string = '';
  form: FormGroup;
  icons = ICONS;
  selectedType: string;
  activeTab = Enum_Trips_Trip_Type.Touristic;
  citiesData: { id: string; name: string }[] = [];
  trTypes: { id: string; name: string }[] = [];

  carouselImages: string[];

  constructor(
    public fb: FormBuilder,
    locale: LocalService,
    _ser: CityService,
    private router: Router,
    private _snck: ErrorService,
    private activatedRoute : ActivatedRoute,
    public homeCarouselImages: HomeBannerService
  ) {

    
    this.citiesData = _ser.data.map((c) => {
      return {
        name: c.name,
        id: c.id,
      };
    });
    this.trTypes.push(...getTravelTypeData(locale));

    this.form = fb.group({
      whereTo: null,
      travelType: null,
      date: null,
    });
  }
  bannerHeight = 60;

  changeTab(tab: any) {
    this.activeTab = tab;
  }
  ngOnInit(): void {
    this.carouselImages = this.activatedRoute.snapshot.data.initData.carousel;
  }

  get hasBorder(): boolean {
    return window.innerWidth > 900;
  }
  search() {
    const data = this.form.value;
    const params: FilterOptionsModel = {
      cities: data.whereTo ? [data.whereTo] : [],
      date: data.date?.getTime() ?? new Date().getTime(),
      tripType: this.activeTab,
      maxPrice: 0,
      minPrice: 0,
      travelType: data.travelType ?? Enum_Trips_Traveltype.Private,
    };
    this.router.navigate([StaticInfo.offersRoute], {
      queryParams: params,
    });
  }
}
