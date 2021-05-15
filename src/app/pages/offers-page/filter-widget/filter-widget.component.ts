import { Component, Input, OnInit, Optional, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { Subject } from 'rxjs';
import { FilterOptionsModel } from 'src/app/data/models/filterOptionModlel';
import { TABS } from 'src/app/data/static/main-info';

@Component({
  selector: 'app-filter-widget',
  templateUrl: './filter-widget.component.html',
  styleUrls: ['./filter-widget.component.scss'],
})
export class FilterWidgetComponent implements OnInit {
  @Output() onFilterChange = new Subject<FilterOptionsModel>();
  @Input() filterOptions: FilterOptionsModel = {
    type: TABS.tour,
    adult: 0,
    cityId: '',
    child: 0,
    minPrice: 0,
    maxPrice: 0,
  };
  minPriceCtrl: FormControl;
  maxPriceCtrl: FormControl;
  constructor(
    @Optional() private dialogRef: MatBottomSheetRef<FilterWidgetComponent>
  ) {}

  ngOnInit(): void {
    this.minPriceCtrl = new FormControl(this.filterOptions.minPrice);
    this.maxPriceCtrl = new FormControl(this.filterOptions.maxPrice);
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
  changeType(type: any) {
    this.filterOptions = {
      ...this.filterOptions,
      type: type,
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
