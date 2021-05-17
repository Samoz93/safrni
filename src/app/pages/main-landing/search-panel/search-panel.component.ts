import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TABS } from 'src/app/data/static/main-info';
import { ICONS } from 'src/app/data/utils/enums';
import { TranslocoService } from '@ngneat/transloco';
import { LocalService } from 'src/app/data/services/local.service';
import { Observable } from 'rxjs';
import { CityService } from 'src/app/data/services/city.service';

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.scss'],
})
export class SearchPanelComponent implements OnInit {
  ticketRipped = false;
  // tripTypes = [
  //   { id: '1', name: 'Public', icon: 'group' },
  //   { id: '2', name: 'Private', icon: 'private' },
  // ];
  selctedTrip: string = '';
  form: FormGroup;
  icons = ICONS;
  selectedType: string;
  activeTab = TABS.tour;
  citiesData: { id: string; name: string }[] = [];
  isArabic$: Observable<boolean>;
  constructor(
    public fb: FormBuilder,
    private locale: LocalService,
    _ser: CityService
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
      travelType: '1',
      date: new Date(),
    });
    this.isArabic$ = locale.isArabic$;
  }
  bannerHeight = 60;
  @HostListener('window:resize', []) onScreenChanged() {
    if (window.innerWidth <= 930 && this.bannerHeight != 85) {
      this.bannerHeight = 85;
    } else if (window.innerWidth > 930 && this.bannerHeight != 60) {
      this.bannerHeight = 60;
    }
  }

  changeTab(tab: any) {
    this.activeTab = tab;
  }
  ngOnInit(): void {}

  get hasBorder(): boolean {
    return window.innerWidth > 900;
  }

  
}
