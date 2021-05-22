import { Component, Inject, OnInit } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { ICONS, snackType } from 'src/app/data/utils/enums';

@Component({
  selector: 'app-snack-comp',
  templateUrl: './snack-comp.component.html',
  styleUrls: ['./snack-comp.component.scss'],
})
export class SnackCompComponent implements OnInit {
  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: { msg: String; type: snackType }
  ) {
    console.log(data);
  }

  ngOnInit(): void {}
}
