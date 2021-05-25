import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StaticInfo, TABS } from 'src/app/data/static/main-info';
import { ICONS } from 'src/app/data/utils/enums';
import { TranslocoService } from '@ngneat/transloco';
import { LocalService } from 'src/app/data/services/local.service';
import { Observable } from 'rxjs';
import { CityService } from 'src/app/data/services/city.service';
import { Router } from '@angular/router';
import { QueryStringParameters } from 'src/app/data/abstract/query.string.builder';
import { FilterOptionsModel } from 'src/app/data/models/filterOptionModlel';
import { SnackService } from 'src/app/data/services/snack.service';
import { ErrorService } from 'src/app/data/services/error.service';
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
  activeTab = TABS.tour;
  citiesData: { id: string; name: string }[] = [];
  isArabic$: Observable<boolean>;
  constructor(
    public fb: FormBuilder,
    locale: LocalService,
    _ser: CityService,
    private router: Router,
    private _snck: ErrorService,
    public homeCarouselImages : HomeBannerService
  ) {
    this.citiesData = _ser.data.map((c) => {
      return {
        name: c.name,
        id: c.id,
      };
    });
    this.form = fb.group({
      whereTo: [this.citiesData[0].id, Validators.required],
      guest: {
        adult: 1,
        child: 0,
      },
      date: null,
    });
    this.isArabic$ = locale.isArabic$;
  }
  bannerHeight = 60;
 
  test() {
    this._snck.showErrorByException(Error('test'));
  }
  changeTab(tab: any) {
    this.activeTab = tab;
  }
  ngOnInit(): void {}

  get hasBorder(): boolean {
    return window.innerWidth > 900;
  }
  search() {
    const data = this.form.value;
    const params: FilterOptionsModel = {
      cityId: data.whereTo,
      date: data.date.getTime(),
      type: this.activeTab,
      maxPrice: 0,
      minPrice: 0,
      adult: data.guest.adult,
      child: data.guest.child,
    };
    this.router.navigate([StaticInfo.offersRoute], {
      queryParams: params,
    });
  }
}
