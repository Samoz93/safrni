import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SnackService {
  constructor(private _snackBar: MatSnackBar) {}

  showSnack(msg: string, isError: boolean = false, handler?: string) {
    this._snackBar.open(msg, handler, {
      panelClass: [!isError ? 'snack-bar' : 'snack-bar-error'],
      duration: 5000,
    });
  }
}
