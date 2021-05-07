import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject, Subscription } from 'rxjs';
import urljoin from 'url-join';
import { Adapter } from '../adapters/adapter';
import { CityModel, CityModelAdapter } from '../models/CityModel';
import { TripModelAdapter } from '../models/TripModel';
import { StaticInfo, EndPoints, LoadingState } from '../static/main-info';
import { ADAPTER_CONFIG, MyAdapter } from './injectionTokens';

@Injectable({
  providedIn: 'root',
})
export class BaseService<T> {
  subs: Subscription[];
  data$ = new ReplaySubject<T[]>();
  data: T[] = Array<T>();

  loadingState$ = new BehaviorSubject<LoadingState>({
    hasError: false,
    isLoading: false,
    msg: '',
  });
  x = [];
  constructor(
    protected http: HttpClient,
    @Inject(ADAPTER_CONFIG) protected conf: MyAdapter
  ) {}

  async fetchAllData(segment: string) {
    const adapter = this.conf.adapter as Adapter<T>;
    const csss = this.conf.class as T;
    console.log(this.conf);
    console.log(segment);
    console.log('typeof', this.conf.class instanceof CityModel);

    return;
    const url = urljoin(StaticInfo.baseUrl, segment);
    console.log(url);
    if (this.data.length < 1) {
      const rawData = await this.http.get<any[]>(url).toPromise();
      this.data.push(...rawData.map((item) => adapter.adapt(item)));
    }
    this.data$.next(this.data);
  }
  async getById(segment: string, id: string): Promise<T | undefined> {
    // const url = urljoin(StaticInfo.baseUrl, segment, id);

    // const data = await this._tryCatch(async () => {
    //   if (this.data instanceof Array) {
    //     let filterData;
    //     if (this.data.length > 0) {
    //       filterData = this.data.filter((f) => Object(f).id == id);
    //     }
    //     //todo filter ?
    //     if (!!filterData) return filterData[0];
    //     else {
    //       return this.adapter.adapt(await this.http.get<any>(url).toPromise());
    //     }
    //   } else {
    //     return this.adapter.adapt(await this.http.get<any>(url).toPromise());
    //   }
    // });

    // return data;
    return;
  }
  _setBusy(isBusy = false, err: string | undefined = undefined) {
    this.loadingState$.next({
      isLoading: isBusy,
      hasError: !!err,
      msg: err || '',
    });
  }
  async _tryCatch(toDo: Function) {
    try {
      this._setBusy(true);
      const data = await toDo();
      this._setBusy(false);
      return data;
    } catch (error) {
      this._setBusy(false, error);
    }
  }

  clearSub() {
    this.data$.subscribe();
    this.loadingState$.subscribe();
  }
}
