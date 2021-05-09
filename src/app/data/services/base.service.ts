import { BehaviorSubject, Subject } from 'rxjs';
import { LoadingState } from '../static/main-info';

export abstract class BaseService<T> {
  abstract init(): Promise<T[]>;

  data: T[] = [];
  data$ = new BehaviorSubject<T[]>([]);

  loadingState$ = new BehaviorSubject<LoadingState>({
    hasError: false,
    isLoading: false,
    msg: '',
  });

  setBusy(isBusy = false, err: string | undefined = undefined) {
    this.loadingState$.next({
      isLoading: isBusy,
      hasError: !!err,
      msg: err || '',
    });
  }
  prepareData(data: T[]) {
    this.data = [];
    this.data.push(...data);
    this.data$.next(data);
    this.setBusy(false);
  }
  clearSub() {
    this.loadingState$.subscribe();
  }
}
