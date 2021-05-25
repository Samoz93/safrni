import { Component, Input, OnInit, Optional, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import {
  CountryISO,
  PhoneNumberFormat,
  SearchCountryField,
} from 'ngx-intl-tel-input';
import { Subject, Subscription } from 'rxjs';
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
  SearchCountryField = SearchCountryField;
  CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;
  preferredCountries: CountryISO[] = [
    CountryISO.UnitedStates,
    CountryISO.UnitedKingdom,
  ];

  @Output() onFilterChange = new Subject<FilterOptionsModel>();
  @Input() filterOptions: FilterOptionsModel = {
    tab: TABS.tour,
    cityId: '',
    minPrice: 0,
    hasHotel: true,
    maxPrice: 0,
    travelType: TravelTypes.private,
  };
  trTypes: any[] = [];
  tr = TravelTypes;
  cities: CityModel[] = [];
  sub: Subscription;
  includedCities: string[] = [];
  form: FormGroup;
  constructor(
    @Optional() private dialogRef: MatBottomSheetRef<FilterWidgetComponent>,
    private loc: LocalService,
    _cityser: CityService,
    private fb: FormBuilder
  ) {
    this.cities = _cityser.data;
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      tab: TABS.tour,
      cityId: '',
      minPrice:
        this.filterOptions.minPrice == 0 ? null : this.filterOptions.minPrice,
      hasHotel: false,
      hasDiscount: false,
      maxPrice:
        this.filterOptions.maxPrice == 0 ? null : this.filterOptions.maxPrice,
      travelType: TravelTypes.private,
      phone: null,
    });

    this.trTypes = getTravelTypeData(this.loc);
    this._sub();
  }

  setCity(checked: boolean, cityId: string) {
    if (checked) this.includedCities.push(cityId);
    else {
      const index = this.includedCities.indexOf(cityId, 0);
      if (index > -1) {
        this.includedCities.splice(index, 1);
      }
    }
    this.filterOptions = {
      ...this.filterOptions,
      cities: this.includedCities,
    };
  }
  _checkValue(val: any, isMin = true) {
    if (isNaN(val) || !val) val = isMin ? 0 : 1000000;
    else val = Number.parseFloat(val);
    if (val < 0) {
      isMin
        ? this.form.patchValue({
            minPrice: 0,
          })
        : this.form.patchValue({
            maxPrice: 0,
          });
    }
    if (isMin) {
      this.filterOptions = {
        ...this.filterOptions,
        minPrice: val,
      };
    } else {
      this.filterOptions = {
        ...this.filterOptions,
        maxPrice: val,
      };
    }
  }
  _sub() {
    this.sub = this.form.valueChanges.subscribe((data) => {
      //min
      console.log('data', data);

      this._checkValue(data.minPrice, true);
      this._checkValue(data.maxPrice, false);

      // console.log(this.filterOptions);
    });
    // this.subs.push(
    //   ...[
    //     this.hotelCtrl.valueChanges.subscribe((f) => {
    //       this.filterOptions = {
    //         ...this.filterOptions,
    //         hasHotel: f,
    //       };
    //     }),

    //   ]
    // );
  }
  // increase(key: string) {
  //   let newCount = Object(this.filterOptions)[key] + 1;
  //   if (newCount <= 0) newCount = 0;

  //   this.filterOptions = {
  //     ...this.filterOptions,
  //     [key]: newCount,
  //   };
  // }
  // decrease(key: any) {
  //   let newCount = Object(this.filterOptions)[key] - 1;
  //   if (newCount <= 0) newCount = 0;
  //   this.filterOptions = {
  //     ...this.filterOptions,
  //     [key]: newCount,
  //   };
  // }
  // getValue(key: string) {
  //   return Object(this.filterOptions)[key];
  // }
  changeType(tab: any) {
    this.filterOptions = {
      ...this.filterOptions,
      tab: tab,
    };
  }

  applyChanges() {
    console.log('CLICKED');

    this.filterOptions = {
      ...this.form.value,
      minPrice: this.filterOptions.minPrice,
      maxPrice: this.filterOptions.maxPrice,
      cities: this.includedCities,
    };
    if (this.dialogRef) {
      this.dialogRef.dismiss(this.filterOptions);
    } else {
      this.onFilterChange.next(this.filterOptions);
    }
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.sub?.unsubscribe();
  }
}
