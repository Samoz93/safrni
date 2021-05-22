import { Component } from '@angular/core';
import { CityService } from './data/services/city.service';
import { MessagingService } from './data/services/messaging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(_ser: CityService, msg: MessagingService) {
    _ser.init();
  }
}
