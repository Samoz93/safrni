import {
  Component,
  Inject,
  Input,
  OnInit,
  Optional,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {
  MatBottomSheetRef,
  MAT_BOTTOM_SHEET_DATA,
} from '@angular/material/bottom-sheet';
import { Subject, Subscription } from 'rxjs';
import { CityModel } from 'src/app/data/models/CityModel';
import { FilterOptionsModel } from 'src/app/data/models/filterOptionModlel';
import { CityService } from 'src/app/data/services/city.service';
import { LocalService } from 'src/app/data/services/local.service';
import {
  Enum_Trips_Traveltype,
  Enum_Trips_Trip_Type,
} from 'src/app/data/services/saferniGraphql.service';
import { getTravelTypeData } from 'src/app/data/utils/enums';

@Component({
  selector: 'app-filter-widget',
  templateUrl: './filter-widget.component.html',
  styleUrls: ['./filter-widget.component.scss'],
})
export class FilterWidgetComponent implements OnInit {
  @Output() onFilterChange = new Subject<FilterOptionsModel>();
  @Input() filterOptions: FilterOptionsModel = {
    tripType: Enum_Trips_Trip_Type.Touristic,
    minPrice: 0,
    cities: [],
    maxPrice: 0,
    travelType: Enum_Trips_Traveltype.Private,
  };
  trTypes: any[] = [];
  tr = Enum_Trips_Traveltype;
  trType = Enum_Trips_Trip_Type;
  cities: CityModel[] = [];
  sub: Subscription;
  includedCities: string[] = [];
  form: FormGroup;
  constructor(
    @Optional() private dialogRef: MatBottomSheetRef<FilterWidgetComponent>,
    @Optional() @Inject(MAT_BOTTOM_SHEET_DATA) private dlgData: any,
    private loc: LocalService,
    _cityser: CityService,
    private fb: FormBuilder
  ) {
    this.cities = _cityser.data;
  }

  ngOnInit(): void {
    if (this.dlgData) {
      this.filterOptions = { ...this.dlgData };
    }
    this.form = this.fb.group({
      tripType: this.filterOptions.tripType ?? Enum_Trips_Trip_Type.Touristic,
      minPrice:
        this.filterOptions.minPrice == 0 ? null : this.filterOptions.minPrice,
      hotel: this.filterOptions.hotel,
      hasDiscount: this.filterOptions.hasDiscount,
      maxPrice:
        this.filterOptions.maxPrice == 0 ? null : this.filterOptions.maxPrice,
      travelType: this.filterOptions.travelType,
    });
    if (this.filterOptions.cities) {
      this.includedCities.push(...this.filterOptions.cities);
    }
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
    if (isNaN(val) || !val) val = isMin ? 0 : 0;
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
      this._checkValue(data.minPrice, true);
      this._checkValue(data.maxPrice, false);
    });
  }
  isCityChecked(cityId: string): boolean {
    return this.includedCities.indexOf(cityId) > -1;
  }
  changeType(tab: Enum_Trips_Trip_Type) {
    this.filterOptions = {
      ...this.filterOptions,
      tripType: tab,
    };
  }

  applyChanges() {
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
