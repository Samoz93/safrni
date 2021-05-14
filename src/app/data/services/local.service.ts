import { Inject, Injectable } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DOCUMENT } from '@angular/common';

const LOCALE_KEY = 'locale';
@Injectable({
  providedIn: 'root',
})
export class LocalService {
  isArabic$: Observable<boolean>;
  constructor(
    private trans: TranslocoService,
    @Inject(DOCUMENT) private document: Document
  ) {
    trans.setActiveLang(this.lastSaveLocale);
    this.isArabic$ = trans.langChanges$.pipe(map((f) => f == 'ar'));
    trans.langChanges$.subscribe((newLang) => {
      this.document.documentElement.lang = newLang;
    });
  }
  get lastSaveLocale(): any {
    return (localStorage.getItem(LOCALE_KEY) as string) || 'en';
  }
  testToggle() {
    if (this.trans.getActiveLang() == 'ar') {
      this.trans.setActiveLang('en');
      localStorage.setItem(LOCALE_KEY, 'en');
    } else {
      this.trans.setActiveLang('ar');
      localStorage.setItem(LOCALE_KEY, 'ar');
    }
  }
  get locale() {
    return this.trans.getActiveLang();
  }
  getTranslation(key: string, args: any = undefined): string {
    return this.trans.translate(key);
  }
}
