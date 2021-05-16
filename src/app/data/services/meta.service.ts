import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { MetaModel } from '../models/MetaModel';
import { StaticInfo } from '../static/main-info';
import { LocalService } from './local.service';

@Injectable({
  providedIn: 'root',
})
export class MetaService {
  constructor(
    private meta: Meta,
    private title: Title,
    private loc: LocalService
  ) {}

  addTags(metaModel: MetaModel) {
    const header =
      metaModel?.title ?? this.loc.getTranslation(StaticInfo.projectName);
    this.title.setTitle(header);
    const allLocales = this.loc.allLocales.map((f) => {
      return { property: 'og:locale:alternate', content: f };
    });
    this.meta.addTags([
      { property: 'og:title', content: header },
      { property: 'og:type', content: metaModel?.type ?? 'page' },
      { property: 'og:image', content: metaModel?.image ?? '' },
      { property: 'og:url', content: location.href },
      { property: 'og:description', content: metaModel?.description ?? '' },
      { property: 'og:locale', content: this.loc.locale },
      ...allLocales,
    ]);
  }
}
