import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {
  BookingInterface,
  BookingModel,
} from 'src/app/data/models/bookingModel';
import { OfferModel } from 'src/app/data/models/offerModel';
import { ImageSnippet } from 'src/app/data/models/variousModels';
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
  ref: BookingInterface;
  ngOnInit(): void {
    this.route.params.subscribe((f) => {
      this.offer = this._ser.getOfferById(f['id']);
      this.isLoading = false;
      this.ref = {
        currency: this.offer.currency,
        duration: this.offer.duration,
        email: '',
        fullName: '',
        id: '',
        image: '',
        isApproved: false,
        message: '',
        phoneNumber: '',
        price: this.offer.price,
        startDate: Date.now(),
        ticketCount: 0,
        ticketImage: '',
      };
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
