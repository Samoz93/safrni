import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LocationModel } from 'src/app/data/models/LocationModel';
import { TimelineModel } from 'src/app/data/models/timelineModel';
import { TripModel } from 'src/app/data/models/TripModel';
import { Trips } from 'src/app/data/services/saferniGraphql.service';
import { TripService } from 'src/app/data/services/trip.service';
import { ICONS } from 'src/app/data/utils/enums';

@Component({
  selector: 'app-tour-information',
  templateUrl: './tour-information.component.html',
  styleUrls: ['./tour-information.component.scss'],
})
export class TourInformationComponent implements OnInit {
  images = [
    'https://wallpapercave.com/wp/wp1813727.jpg',
    'https://wallpapercave.com/wp/wp1813725.jpg',
    'https://i.ytimg.com/vi/no7LCcGTvn8/maxresdefault.jpg',
  ];

  trips = [
    {
      id: 1,
      currency: '$',
      duration: 40,
      name: 'toIstanbul',
      price: 500,
      trip_type: 'touristic',
      description: 'lorem',
      previewImage: {
        url:
          'https://media.gettyimages.com/photos/blue-mosque-in-istanbul-picture-id160193420?s=612x612',
      },
    },
    {
      id: 1,
      currency: '$',
      duration: 40,
      name: 'toIstanbul',
      price: 500,
      trip_type: 'touristic',
      description: 'lorem',
      previewImage: {
        url:
          'https://media.gettyimages.com/photos/blue-mosque-in-istanbul-picture-id160193420?s=612x612',
      },
    },
    {
      id: 1,
      currency: '$',
      duration: 40,
      name: 'toIstanbul',
      price: 500,
      trip_type: 'touristic',
      description: 'lorem',
      previewImage: {
        url:
          'https://media.gettyimages.com/photos/blue-mosque-in-istanbul-picture-id160193420?s=612x612',
      },
    },
    {
      id: 1,
      currency: '$',
      duration: 40,
      name: 'toIstanbul',
      price: 500,
      trip_type: 'touristic',
      description: 'lorem',
      previewImage: {
        url:
          'https://media.gettyimages.com/photos/blue-mosque-in-istanbul-picture-id160193420?s=612x612',
      },
    },
  ];

  trip: TripModel;
  timelines: TimelineModel[] = [];

  isLoading: boolean = false;

  bookForm: FormGroup;
  icons = ICONS;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private tripService: TripService
  ) {}

  ngOnInit(): void {
    this.bookForm = new FormGroup({
      fullName: new FormControl(null, [Validators.required]),
      phone: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      arrivalDate: new FormControl(null, [Validators.required]),
      message: new FormControl(null, [Validators.required]),
    });

    this.activatedRoute.paramMap.subscribe(async (params) => {
      this.isLoading = true;
      console.log('is loading');

      this.trip = await this.tripService.getTripById(params.get('id')!);

      this.timelines.push(
        ...(await this.tripService.getTimeline(this.trip.timelineId))!
      );
      console.log(`stopped loading ${this.timelines}`);

      this.isLoading = false;
    });
  }

  onFormSubmitted() {}
  showOnMap() {
    this.router.navigate(['/map/1']);
  }
  getAllLocations(): LocationModel[] {
    let allLocations = new Array();
    this.timelines.forEach((element) => {
      allLocations.push(...element.locations);
    });

    return allLocations;
  }
}
