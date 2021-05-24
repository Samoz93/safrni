import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs';
import { ErrorDlgComponent } from 'src/app/common/widgets/error-dlg/error-dlg.component';
import { LoadingState } from '../static/main-info';
import { isDevMode } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  constructor(private dlg: MatDialog) {}

  observeError$(st$: BehaviorSubject<LoadingState>) {
    st$.subscribe((state) => {
      if (isDevMode()) return;
      if (state.hasError) {
        this.dlg.open(ErrorDlgComponent, {
          data: state,
          disableClose: false,
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
      msg: err.message,
    };
    this.dlg.open(ErrorDlgComponent, {
      data: st,
      disableClose: true,
      height: '35vh',
    });
  }
}
