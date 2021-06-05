import { Injectable } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { snackType } from '../utils/enums';
import { SnackService } from './snack.service';

@Injectable({
  providedIn: 'root',
})
export class MessagingService {
  constructor(
    private _ser: AngularFireMessaging,
    private _snackBar: SnackService
  ) {
    _ser.onMessage((f) => {
      const str = `${f?.notification?.title} ${f?.notification?.body}`;
      _snackBar.showSnack(str, snackType.info);
    });
  }

  askForPermission() {
    this._ser.requestPermission.subscribe(
      (p) => {
        // this._snackBar.showSnack("Thanks for giving the permissions")
      },
      (err) => {
        //nothing to do
        console.log(err);
      }
    );
  }
}
