import { Injectable } from '@angular/core';
import { Subscription, Subject, BehaviorSubject } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class SplashScreenStateService {
  playing = new BehaviorSubject<boolean>(false);
  start() {
    this.playing.next(true);
  }
  stop() {
    this.playing.next(false);
  }
}
