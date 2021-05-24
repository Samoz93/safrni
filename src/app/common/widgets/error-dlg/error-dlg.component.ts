import { Component, Inject, isDevMode, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingState } from 'src/app/data/static/main-info';

@Component({
  templateUrl: './error-dlg.component.html',
  styleUrls: ['./error-dlg.component.scss'],
})
export class ErrorDlgComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ErrorDlgComponent>,
    @Inject(MAT_DIALOG_DATA) public data: LoadingState,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    console.log(this.data);
  }
  get isDev() {
    return isDevMode();
  }
  async tryAgain() {
    if (this.data.handler) {
      await this.data.handler();
    }
    this.dialogRef.close();
  }

  async goHome() {
    if (this.route.snapshot.url.length < 1) {
      location.reload();
    } else {
      await this.router.navigate(['/'], {
        replaceUrl: true,
        skipLocationChange: true,
      });
      this.dialogRef.close();
    }
  }
}
