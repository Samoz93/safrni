import { Injectable } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LocalService {
  isArabic$: Observable<boolean>;
  constructor(private trans: TranslocoService) {
    this.isArabic$ = trans.langChanges$.pipe(map((f) => f == 'ar'));
  }

  testToggle() {
    if (this.trans.getActiveLang() == 'ar') {
      this.trans.setActiveLang('en');
    } else {
      this.trans.setActiveLang('ar');
    }
  }

  getTranslation(key: string, args: any = undefined): string {
    return this.trans.translate(key);
  }
}
