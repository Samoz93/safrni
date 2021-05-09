import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BookingInterface } from 'src/app/data/models/bookingModel';
import { TripModel } from 'src/app/data/models/TripModel';
import { ImageSnippet } from 'src/app/data/models/variousModels';
import { TripService } from 'src/app/data/services/trip.service';
import { ICONS } from 'src/app/data/utils/enums';

@Component({
  selector: 'app-booking-page',
  templateUrl: './booking-page.component.html',
  styleUrls: ['./booking-page.component.scss'],
})
export class BookingPageComponent implements OnInit {
  trip: TripModel;
  isLoading = true;
  icns = ICONS;
  constructor(
    public route: ActivatedRoute,
    public _ser: TripService,
    public fb: FormBuilder
  ) {}
  form: FormGroup;
  ref: BookingInterface;
  ngOnInit(): void {
    this.route.params.subscribe(async (f) => {
      // this.trip = await this._ser.getOfferById(f['id']);
      // this.isLoading = false;
      // this.ref = {
      //   // currency: this.offer.currency,
      //   // duration: this.offer.duration,
      //   // email: '',
      //   // fullName: '',
      //   // id: '',
      //   // image: '',
      //   // isApproved: false,
      //   // message: '',
      //   // phoneNumber: '',
      //   // price: this.price,
      //   // startDate: Date.now(),
      //   // ticketCount: 0,
      //   // ticketImage: '',
      // };
    });

    this.form = this.fb.group({
      ...this.ref,
      startDate: new Date(this.ref.startDate),
    });
  }

  selectedFile: ImageSnippet;

  saveData() {
    const isValid = this.form.valid;
    if (!isValid) return;

    const booking: BookingInterface = {
      ...this.form.value,
    };

    console.log(booking);
  }
  onSelectFile(event: any) {
    if (!event.target.files) return;
    const file: File = event.target.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {
      this.selectedFile = new ImageSnippet(event.target.result, file);
      console.log(this.selectedFile);

      // this.imageService.uploadImage(this.selectedFile.file).subscribe(
      //   (res) => {},
      //   (err) => {}
      // );
    });

    reader.readAsDataURL(file);
  }
}
