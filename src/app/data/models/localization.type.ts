import { Injectable } from '@angular/core';
import { Adapter } from '../adapters/adapter';

export type LocalizationType = { id: string; locale: string };

@Injectable({ providedIn: 'root' })
export class StrapiLocalizationsAdapter implements Adapter<LocalizationType[]> {
  adapt(items: any[]): LocalizationType[] {
    return items?.map((item) => {
      return { id: item.id, locale: item.locale };
    });
  }
}
