import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ImageModel } from 'src/app/data/models/ImageModel';
import { Feature, Price, TripModel } from 'src/app/data/models/TripModel';
import { DevData } from 'src/app/data/static/main-info';

@Component({
  selector: 'app-trip-card',
  templateUrl: './single-trip-card.component.html',
  styleUrls: ['./single-trip-card.component.scss'],
})
export class SingleTripCardComponent implements OnInit {
  @Input() name: string = '';
  @Input() duration: number = 0;
  @Input() price: Price;
  @Input() img: ImageModel;
  @Input() features: Feature[] = [];
  @Input() id: string = '';
  @Input() isOffer: boolean = true;

  constructor(private router: Router, private activeRoute: ActivatedRoute) {}

  ngOnInit(): void {}

  goToOffer() {
    console.log(this.id);

    if (this.isOffer) this.router.navigate([DevData.tourInfoRoute, this.id]);
    else
      this.router.navigate([DevData.offersRoute], {
        queryParams: { city: this.id },
      });
  }
}
