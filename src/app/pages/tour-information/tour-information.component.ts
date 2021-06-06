import {
  AfterViewChecked,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LocationModel } from 'src/app/data/models/LocationModel';
import { TripModel } from 'src/app/data/models/TripModel';
import { LocalService } from 'src/app/data/services/local.service';
import { Enum_Booking_Currency } from 'src/app/data/services/saferniGraphql.service';
import { TripService } from 'src/app/data/services/trip.service';
import { ICONS } from 'src/app/data/utils/enums';
import { BookingService } from 'src/app/data/services/booking.service';
import { MatDialog } from '@angular/material/dialog';
import { BookingSubmitPopupComponent } from 'src/app/common/widgets/booking-submit-popup/booking-submit-popup.component';
import { priceData } from 'src/app/data/pipes/price-caculator.pipe';
import { tap } from 'rxjs/operators';
import { GuestCountModel } from 'src/app/data/models/guestCountModel';

@Component({
  selector: 'app-tour-information',
  templateUrl: './tour-information.component.html',
  styleUrls: ['./tour-information.component.scss'],
})
export class TourInformationComponent implements OnInit, AfterViewChecked {
  trip: TripModel;
  relatedTrips: TripModel[];
  bookForm: FormGroup;
  icons = ICONS;
  planLocations: LocationModel[];
  isSubmiting = false;
  placesSwiperIndex = 0;

  math = Math;
  phoneInitiated = false;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private tripService: TripService,
    public loc: LocalService,
    private bookingService: BookingService,
    public dialog: MatDialog,
    private readonly changeDetectorRef: ChangeDetectorRef
  ) {}
  ngOnInit(): void {
    this.bookForm = new FormGroup({
      fullName: new FormControl(null, [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      arrivalDate: new FormControl(null, [Validators.required]),
      child: new FormControl(0),
      adult: new FormControl(1),
      message: new FormControl(null),
    });
    this.activatedRoute.data.subscribe(async (data) => {
      this.trip = data.dataMap.trip;
      this.planLocations = data.dataMap.locations ?? [];
      this.relatedTrips = await this.tripService.getRelatedTrips(this.trip);
      this.relatedTrips = this.relatedTrips.filter(
        (t) => t.id !== this.trip.id
      );
    });
  }
  ngAfterViewChecked(): void {
    this.changeDetectorRef.detectChanges();
  }
  async onFormSubmitted() {
    Object.keys(this.bookForm.controls).forEach((field) => {
      const control = this.bookForm.get(field);
      control?.markAsTouched({ onlySelf: true });
    });
    if (this.bookForm.valid) {
      this.isSubmiting = true;
      //TODO
      let result = await this.bookingService.createBooking(
        this.trip.id,
        this.bookForm.get('fullName')?.value,
        this.trip.basePrice,
        this.trip.basePeopleCount,
        this.trip.discount,
        Enum_Booking_Currency.Dollar,
        this.bookForm.get('phone')?.value.internationalNumber,
        this.bookForm.get('arrivalDate')?.value,
        this.bookForm.get('email')?.value,
        this.bookForm.get('adult')?.value,
        this.bookForm.get('child')?.value,
        
        this.bookForm.get('message')?.value
      );

      this.isSubmiting = false;
      this.openDialog(result);
    }
  }
  showOnMap() {
    this.router.navigate([
      '/map',
      this.activatedRoute.snapshot.paramMap.get('id'),
    ]);
  }

  getCarouselImages(): string[] {
    return this.planLocations?.map((l) => l.images[0].url) ?? [];
  }
  getCarouselTexts(): string[] {
    return this.planLocations?.map((l) => l.name) ?? [];
  }
  goToTour(id: string) {
    this.router.navigate(['/tours', id]);
  }
  openDialog(success: boolean = true): void {
    const dialogRef = this.dialog.open(BookingSubmitPopupComponent, {
      data: { success: success },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
  get guestData(): GuestCountModel {
    return {
      adult: +this.bookForm.value.adult ?? 0,
      child: +this.bookForm.value.child ?? 0,
    };
  }
  goToMapLocation(id: string) {
    this.router.navigate(['/map', this.trip.id], {
      queryParams: { location: id },
    });
  }
  scrollToBooking() {
    let el = document.getElementById('booking');
    el!.scrollIntoView({ behavior: 'smooth' });
  }
  placesGirdOnSwipe(right = true) {
    let dir = this.loc.locale === 'ar' ? !right : right;

    if (
      dir &&
      this.placesSwiperIndex + 1 <
        Math.ceil((this.planLocations?.length ?? 0) / 4)
    ) {
      this.placesSwiperIndex++;
    } else if (!dir && this.placesSwiperIndex > 0) {
      this.placesSwiperIndex--;
    }
  }
}
