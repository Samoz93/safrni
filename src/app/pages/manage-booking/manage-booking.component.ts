import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookingService } from 'src/app/data/services/booking.service';

@Component({
  selector: 'app-manage-booking',
  templateUrl: './manage-booking.component.html',
  styleUrls: ['./manage-booking.component.scss'],
})
export class ManageBookingComponent implements OnInit {
  constructor(
    public activatedRoute: ActivatedRoute,
    private bookingService: BookingService
  ) {}

  bookingId: string;
  operation: 'cancel' | 'confirm';
  loading = false;
  options = {
    autoplay: true,
    loop: 0,
    path: '../../../../assets/animation/booking_submit_animation2.json',
  };
  ngOnInit(): void {
    this.operation = this.activatedRoute.snapshot.data.manageBookingData.type;
  }
}
