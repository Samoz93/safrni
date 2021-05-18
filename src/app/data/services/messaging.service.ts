import { Injectable } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class MessagingService {
  constructor(
    private _ser: AngularFireMessaging,
    private _snackBar: MatSnackBar
  ) {
    console.log('messaging service');

    _ser.requestPermission.subscribe((p) => {
      console.log('per', p);
    });

    _ser.getToken.subscribe((t) => {
      console.log('token', t);
    });

    _ser.onMessage((f) => {
      console.log(f);

      const str = `${f?.notification?.title} ${f?.notification?.body}`;
      _snackBar.open(str, undefined, {
        panelClass: ['snack-bar'],
        duration: 5000,
      });
    });
  }
}
