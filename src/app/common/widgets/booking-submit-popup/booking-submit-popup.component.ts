import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

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
}

export interface BookingPopupData {
  success: boolean;
}
