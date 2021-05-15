import { Component } from '@angular/core';
import { CityService } from './data/services/city.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(_ser: CityService) {}
}
