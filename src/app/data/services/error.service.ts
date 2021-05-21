import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs';
import { ErrorDlgComponent } from 'src/app/common/widgets/error-dlg/error-dlg.component';
import Observable from 'zen-observable';
import { LoadingState } from '../static/main-info';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  constructor(private dlg: MatDialog) {}

  observeError$(st$: BehaviorSubject<LoadingState>) {
    st$.subscribe((state) => {
      if (state.hasError) {
        this.dlg.open(ErrorDlgComponent, {
          data: state,
          disableClose: true,
        });
      }
    });
  }

  showError(st: LoadingState) {
    if (st.hasError) {
      this.dlg.open(ErrorDlgComponent, {
        data: st,
        disableClose: true,
      });
    }
  }
  showErrorByException(err: Error) {
    const st: LoadingState = {
      hasError: true,
      isLoading: false,
      msg: err.name,
    };
    this.dlg.open(ErrorDlgComponent, {
      data: st,
      disableClose: true,
    });
  }
}
