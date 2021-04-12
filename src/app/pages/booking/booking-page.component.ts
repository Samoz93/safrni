import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BookingModel } from 'src/app/data/models/bookingModel';
import { OfferModel } from 'src/app/data/models/offerModel';
import { TripOptions } from 'src/app/data/models/variousModels';
import { OfferSeviceService } from 'src/app/data/servers/offer-sevice.service';
import { ICONS } from 'src/app/data/uitls/enums';

@Component({
  selector: 'app-booking-page',
  templateUrl: './booking-page.component.html',
  styleUrls: ['./booking-page.component.scss'],
})
export class BookingPageComponent implements OnInit {
  offer: OfferModel;
  isLoading = true;
  icns = ICONS;
  constructor(
    public route: ActivatedRoute,
    public _ser: OfferSeviceService,
    public fb: FormBuilder
  ) {}
  form: FormGroup;
  model = new BookingModel();
  // ref: BookingInterface = {
  //   currency: '',
  //   duration: 5,
  //   email: '',
  //   fullName: '',
  //   id: '',
  //   image: '',
  //   isApproved: false,
  //   message: '',
  //   phoneNumber: '',
  //   price: 0,
  //   startDate: 0,
  //   ticketCount: 0,
  //   ticketImage: '',
  // };
  ngOnInit(): void {
    this.route.params.subscribe((f) => {
      this.offer = this._ser.getOfferById(f['id']);
      this.isLoading = false;
    });
    this.form = this.fb.group({
      ...this.model,
      startDate: new Date(this.model.startDate),
    });
  }
}
