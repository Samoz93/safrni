import { isDevMode } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject, throwError } from 'rxjs';
import { ErrorDlgComponent } from 'src/app/common/widgets/error-dlg/error-dlg.component';
import { LoadingState } from '../static/main-info';
import { ErrorService } from './error.service';

export abstract class BaseService<T> {
  abstract init(params?: any): Promise<T[]>;
  data: T[] = [];
  data$ = new BehaviorSubject<T[]>([]);
  constructor(ser: ErrorService) {
    // ser.observeError$(this.loadingState$);
  }
  loadingState$ = new BehaviorSubject<LoadingState>({
    hasError: false,
    isLoading: false,
    msg: '',
    handler: () => {},
  });
  setBusy(
    isBusy = false,
    err: any | undefined = undefined,
    handler: Function | undefined = undefined
  ) {
    this.loadingState$.next({
      isLoading: isBusy,
      hasError: !!err,
      msg: err || '',
      handler: handler,
    });
  }
  prepareData(data: T[]) {
    this.data = [];
    this.data.push(...data);
    this.data$.next(data);
    return this.data;
  }
  clearSub() {
    this.loadingState$.subscribe();
  }

  async _doStuff<T>(toDo: Function): Promise<T | undefined> {
    try {
      this.setBusy(true);
      const data: T = await toDo();
      this.setBusy(false);
      return data;
    } catch (error) {
      console.error(error);

      this.setBusy(false, error, toDo);
      if (isDevMode()) throwError(error);
      return undefined;
    }
  }
}
