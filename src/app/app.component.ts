import { Component } from '@angular/core';
import { LocalService } from './data/services/local.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isArabic$;
  constructor(locale: LocalService) {
    this.isArabic$ = locale.isArabic$;
  }
}
