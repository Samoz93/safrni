import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'language',
})
export class LanguagePipe implements PipeTransform {
  transform(val: string): string {
    switch (val) {
      case 'ar':
        return 'العربية';
        break;
      case 'en':
        return 'English';
      case 'ru':
        return 'русский';
      case 'tr':
        return 'Turkish';
      default:
        return 'English';
        break;
    }
  }
}
