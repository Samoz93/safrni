import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { FilterOptionsModel } from 'src/app/data/models/filterOptionModlel';
import { TripModel } from 'src/app/data/models/TripModel';
import { LocalService } from 'src/app/data/services/local.service';
import { TripService } from 'src/app/data/services/trip.service';
import { StaticInfo } from 'src/app/data/static/main-info';
import { TABS, TravelTypes } from 'src/app/data/utils/enums';
import { FilterWidgetComponent } from './filter-widget/filter-widget.component';

@Component({
  selector: 'app-offers-page',
  templateUrl: './offers-page.component.html',
  styleUrls: ['./offers-page.component.scss'],
})
export class OffersPageComponent implements OnInit {
  images = [
    'https://wallpapercave.com/wp/wp1813727.jpg',
    'https://wallpapercave.com/wp/wp1813725.jpg',
    'https://i.ytimg.com/vi/no7LCcGTvn8/maxresdefault.jpg',
  ];
  projectName = StaticInfo.projectName;
  data: TripModel[];
  isLoading = false;
  filterOptions: FilterOptionsModel;

  constructor(
    public _ser: TripService,
    private _bottomSheet: MatBottomSheet,
    private route: ActivatedRoute,
    private router: Router,
    private loc: LocalService
  ) {}
  cityid: string;
  ngOnInit(): void {
    this.data = this.route.snapshot.data.trips;

    const initQuery = this.route.snapshot.queryParams;
    this.route.queryParams.subscribe((newQuery) => {
      this.cityid = newQuery.city;
      this.filterOptions = {
        tab: newQuery.type ?? TABS.tour,
        cityId: newQuery.cityId,
        hasHotel: true,
        maxPrice: newQuery.maxPrice ? +newQuery.maxPrice : 0,
        minPrice: newQuery.minPrice ? +newQuery.minPrice : 0,
        date: newQuery.date ? +newQuery.date : new Date().getTime(),
        travelType: newQuery.travelType ?? TravelTypes.private,
      };
      if (newQuery == initQuery) {
        return;
      }

      this._initData();
    });
  }
  async _initData() {
    this.isLoading = true;
    //absolute

    this.data = await this._ser.queryTrips({
      limit: 30,
      locale: this.loc.locale,
      cityId: this.cityid,
      priceRange: {
        maxPrice:
          +this.filterOptions.maxPrice < 1
            ? 100000
            : +this.filterOptions.maxPrice,
        minPrice: +this.filterOptions?.minPrice ?? 0,
      },
    });
    this.isLoading = false;
  }
  async onFilterChange(filterData: FilterOptionsModel) {
    const queryParams: Params = { ...filterData };

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: queryParams,
      queryParamsHandling: 'merge', // remove to replace all query params by provided
    });
  }

  openFilter() {
    const data = this._bottomSheet.open(FilterWidgetComponent);
    data.afterDismissed().subscribe((d) => {
      this.onFilterChange(d);
    });
  }
}
