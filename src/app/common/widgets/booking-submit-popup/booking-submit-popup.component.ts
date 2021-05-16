import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AnimationOptions } from 'ngx-lottie';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-booking-submit-popup',
  templateUrl: './booking-submit-popup.component.html',
  styleUrls: ['./booking-submit-popup.component.scss'],
})
export class BookingSubmitPopupComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<BookingSubmitPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: BookingPopupData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {}

  options = {
    autoplay: true,
    loop: 0,
    path: this.data.success
      ? '../../../../assets/animation/booking_submit_animation2.json'
      : '../../../../assets/animation/error.json',
  };
}

export interface BookingPopupData {
  success: boolean;
}
