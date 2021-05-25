import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { ICONS, snackType } from 'src/app/data/utils/enums';

@Component({
  selector: 'app-snack-comp',
  templateUrl: './snack-comp.component.html',
  styleUrls: ['./snack-comp.component.scss'],
})
export class SnackCompComponent implements OnInit {
  constructor(
    @Inject(MAT_SNACK_BAR_DATA)
    public data: { msg: String; type: snackType; preClose: any },
    ren: Renderer2
  ) {
    setTimeout(() => {
      let snackEl = document
        .getElementsByClassName('mat-snack-bar-container')
        .item(0);
      ren.listen(snackEl, 'click', () => this.dismiss());
    });
  }
  dismiss() {
    this.data.preClose();
  }
  ngOnInit(): void {}
}
