import { Component, OnInit, Optional, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { Subject } from 'rxjs';
import { TABS } from 'src/app/data/static/main-info';

@Component({
  selector: 'app-filter-widget',
  templateUrl: './filter-widget.component.html',
  styleUrls: ['./filter-widget.component.scss'],
})
export class FilterWidgetComponent implements OnInit {
  @Output() onFilterChange = new Subject<any>();
  filterOptions = {
    type: TABS.tour,
    count: {
      adult: 0,
      child: 0,
    },
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
      if (isNaN(val)) val = 0;
      else val = Number.parseFloat(val);

      this.filterOptions = {
        ...this.filterOptions,
        minPrice: val,
      };
    });
    this.maxPriceCtrl.valueChanges.subscribe((f) => {
      let val = f;
      if (isNaN(val)) val = 0;
      else val = Number.parseFloat(val);
      this.filterOptions = {
        ...this.filterOptions,
        maxPrice: val,
      };
    });
  }

  increase(key: string) {
    let newCount = Object(this.filterOptions.count)[key] + 1;
    if (newCount <= 0) newCount = 0;

    this.filterOptions = {
      ...this.filterOptions,
      count: {
        ...this.filterOptions.count,
        [key]: newCount,
      },
    };
  }
  decrease(key: any) {
    let newCount = Object(this.filterOptions.count)[key] - 1;
    if (newCount <= 0) newCount = 0;
    this.filterOptions = {
      ...this.filterOptions,
      count: {
        ...this.filterOptions.count,
        [key]: newCount,
      },
    };
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
