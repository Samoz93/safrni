import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, ReplaySubject, Subject, Subscription } from 'rxjs';
import urljoin from 'url-join';
import { DevData, EndPoints, LoadingState } from '../static/main-info';

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
    public endPoint: EndPoints,
    public options = {}
  ) {}

  async fetchAllData() {
    this._tryCatch(async () => {
      const url = urljoin(DevData.baseUrl, this.endPoint);
      if (this.data.length < 1) {
        const d = await this.http.get<T[]>(url).toPromise();
        this.data.push(...d);
        //TODO for test
        this.data.push(...d);
        this.data.push(...this.data);
        this.data.push(...this.data);
        this.data.push(...this.data);
      }
      this.data$.next(this.data);
    });
  }
  async getById(id: string): Promise<T> {
    const url = urljoin(DevData.baseUrl, this.endPoint, id);
    const data = await this._tryCatch(async () => {
      if (this.data instanceof Array) {
        let filterData;
        if (this.data.length > 0) {
          filterData = this.data.filter((f) => Object(f).id == id);
        }
        //todo filter ?
        if (!!filterData) return filterData[0];
        else {
          return await this.http.get<T>(url).toPromise();
        }
      } else {
        return await this.http.get<T>(url).toPromise();
      }
    });

    return data;
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
