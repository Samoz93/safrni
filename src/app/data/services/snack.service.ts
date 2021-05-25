import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackCompComponent } from 'src/app/common/widgets/snack-comp/snack-comp.component';
import { snackType } from '../utils/enums';

@Injectable({
  providedIn: 'root',
})
export class SnackService {
  constructor(private _snackBar: MatSnackBar) {}

  showSnack(msg: string, type: snackType = snackType.succes, handler?: string) {
    const ref = this._snackBar.openFromComponent(SnackCompComponent, {
      duration: 5000,
      data: {
        msg: msg,
        type: type,
        preClose: () => {
          console.log('clicked close');
          ref.dismiss();
        },
      },
      panelClass: ['snack', type],
      politeness: 'polite',
    });
  }
}
