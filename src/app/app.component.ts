import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Thumbs } from 'swiper';
import { CityService } from './data/services/city.service';
import { MessagingService } from './data/services/messaging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  hideFooter = false;

  constructor(_ser: CityService, msg: MessagingService, public route: Router) {
    _ser.init();
  }
  ngOnInit(): void {
    this.route.events
      .pipe(filter((event) => event instanceof NavigationStart))
      .subscribe((routeEvent) => {
        if (
          (routeEvent as NavigationStart).url.includes('/map') &&
          !this.hideFooter
        )
          this.hideFooter = true;
        else {
          this.hideFooter = false;
        }
      });
  }
  ctrl = new FormControl();
}
