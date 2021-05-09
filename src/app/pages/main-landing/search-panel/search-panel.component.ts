import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TABS } from 'src/app/data/static/main-info';
import { ICONS } from 'src/app/data/utils/enums';
import { TranslocoService } from '@ngneat/transloco';
import { LocalService } from 'src/app/data/services/local.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.scss'],
})
export class SearchPanelComponent implements OnInit {
  tripTypes = [
    { id: '1', name: 'Public', icon: 'group' },
    { id: '2', name: 'Private', icon: 'private' },
  ];
  selctedTrip: string = '';
  form: FormGroup;
  icons = ICONS;
  selectedType: string;
  activeTab = TABS.tour;

  isArabic$: Observable<boolean>;
  constructor(public fb: FormBuilder, private locale: LocalService) {
    this.form = fb.group({
      whereTo: ['sasdasd', Validators.required],
      guest: {
        adult: 1,
        child: 0,
      },
      travelType: '1',
      date: new Date(),
    });
    this.isArabic$ = locale.isArabic$;
  }
  changeTab(tab: any) {
    this.activeTab = tab;
  }
  ngOnInit(): void {}

  get hasBorder(): boolean {
    return window.innerWidth > 900;
  }

  test() {
    this.locale.testToggle();
  }
}
