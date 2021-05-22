import { Component, Input, OnInit, Optional, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { Subject } from 'rxjs';
import { CityModel } from 'src/app/data/models/CityModel';
import { FilterOptionsModel } from 'src/app/data/models/filterOptionModlel';
import { CityService } from 'src/app/data/services/city.service';
import { LocalService } from 'src/app/data/services/local.service';
import { getTravelTypeData, TABS, TravelTypes } from 'src/app/data/utils/enums';

@Component({
  selector: 'app-filter-widget',
  templateUrl: './filter-widget.component.html',
  styleUrls: ['./filter-widget.component.scss'],
})
export class FilterWidgetComponent implements OnInit {
  @Output() onFilterChange = new Subject<FilterOptionsModel>();
  @Input() filterOptions: FilterOptionsModel = {
    tab: TABS.tour,
    cityId: '',
    minPrice: 0,
    hasHotel: true,
    maxPrice: 0,
    travelType: TravelTypes.private,
  };
  minPriceCtrl: FormControl;
  maxPriceCtrl: FormControl;
  travelTypeCtrl: FormControl;
  cityCtrl: FormControl;
  trTypes: any[] = [];
  tr = TravelTypes;
  cities: CityModel[] = [];
  subs = [];
  constructor(
    @Optional() private dialogRef: MatBottomSheetRef<FilterWidgetComponent>,
    private loc: LocalService,
    _cityser: CityService
  ) {
    this.cities = _cityser.data;
  }

  ngOnInit(): void {
    this.minPriceCtrl = new FormControl(
      this.filterOptions.minPrice == 0 ? null : this.filterOptions.minPrice
    );
    this.maxPriceCtrl = new FormControl(
      this.filterOptions.maxPrice == 0 ? null : this.filterOptions.maxPrice
    );
    this.travelTypeCtrl = new FormControl(
      this.filterOptions?.travelType ?? TravelTypes.private
    );
    this.cityCtrl = new FormControl(this.filterOptions.cityId);

    this.trTypes = getTravelTypeData(this.loc);
    this._sub();
  }
  _sub() {
    this.travelTypeCtrl.valueChanges.subscribe((f) => {
      this.filterOptions = {
        ...this.filterOptions,
        travelType: f,
      };
    });
    this.minPriceCtrl.valueChanges.subscribe((f) => {
      let val = f;
      if (isNaN(val) || !val) val = 0;
      else val = Number.parseFloat(val);
      if (val < 0) this.minPriceCtrl.setValue(0);
      this.filterOptions = {
        ...this.filterOptions,
        minPrice: val,
      };
    });
    this.maxPriceCtrl.valueChanges.subscribe((f) => {
      let val = f;

      if (isNaN(val) || !val) val = 1000000;
      else val = Number.parseFloat(val);
      if (val < 0) this.maxPriceCtrl.setValue(0);
      this.filterOptions = {
        ...this.filterOptions,
        maxPrice: val,
      };
    });
  }
  increase(key: string) {
    let newCount = Object(this.filterOptions)[key] + 1;
    if (newCount <= 0) newCount = 0;

    this.filterOptions = {
      ...this.filterOptions,
      [key]: newCount,
    };
  }
  decrease(key: any) {
    let newCount = Object(this.filterOptions)[key] - 1;
    if (newCount <= 0) newCount = 0;
    this.filterOptions = {
      ...this.filterOptions,
      [key]: newCount,
    };
  }
  getValue(key: string) {
    return Object(this.filterOptions)[key];
  }
  changeType(tab: any) {
    this.filterOptions = {
      ...this.filterOptions,
      tab: tab,
    };
  }

  applyChanges() {
    if (this.dialogRef) {
      this.dialogRef.dismiss(this.filterOptions);
    } else {
      this.onFilterChange.next(this.filterOptions);
    }
  }
}
