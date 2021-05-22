import { Injectable } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { snackType } from '../utils/enums';
import { SnackService } from './snack.service';

@Injectable({
  providedIn: 'root',
})
export class MessagingService {
  constructor(_ser: AngularFireMessaging, _snackBar: SnackService) {
    _ser.requestPermission.subscribe((p) => {
      console.log('per', p);
    });

    _ser.onMessage((f) => {
      const str = `${f?.notification?.title} ${f?.notification?.body}`;
      _snackBar.showSnack(str, snackType.info);
    });
  }
}
