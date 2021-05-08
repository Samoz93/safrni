import { Injectable } from '@angular/core';
import { Subscription, Subject, BehaviorSubject } from 'rxjs';
import { StaticSettings } from '../static/main-info';
@Injectable({ providedIn: 'root' })
export class SplashScreenStateService {
  playing = new BehaviorSubject<boolean>(false);
  lastShown: number;
  start() {
    this.lastShown = Date.now();
    this.playing.next(true);
  }
  stop() {
    let timeDiff: number = 0;
    timeDiff = Date.now() - this.lastShown;
    if (timeDiff > StaticSettings.LOADER_MINIMUM_INTERVAL)
      this.playing.next(false);
    else {
      setTimeout(() => {
        this.playing.next(false);
      }, StaticSettings.LOADER_MINIMUM_INTERVAL - timeDiff);
    }
  }
}
