import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { BingImageModel } from '../models/bingImageModel';
import { BaseService } from './base.service';
import { LocalService } from './local.service';

@Injectable({
  providedIn: 'root',
})
export class BingImageService {
  constructor(private http: HttpClient, private loc: LocalService) {}
  data: { [key: string]: BingImageModel[] } = {};
  async getImage(key: string): Promise<BingImageModel[]> {
    if (this.data[key]) {
      console.log('getting cached search');

      return this.data[key];
    }
    // const params = new HttpParams();
    // params.append('q', key);

    const keyword = this.loc.locale === 'ar' ? key + ' تركيا' : key + ' Turkey';

    const data = await this.http
      .get<any>('https://api.bing.microsoft.com/v7.0/images/search', {
        params: {
          q: keyword,
        },
        headers: { 'Ocp-Apim-Subscription-Key': environment.azureKey },
      })
      .toPromise();
    const adaptedData: BingImageModel[] = data['value'].map((f: any) => {
      const model: BingImageModel = {
        thumb: f['thumbnailUrl'],
        url: f['contentUrl'],
      };
      return model;
    });
    this.data = {
      ...this.data,
      [key]: adaptedData,
    };
    return adaptedData;
  }
}
