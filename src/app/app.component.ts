import { Component } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
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
