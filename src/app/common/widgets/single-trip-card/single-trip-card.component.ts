import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FeatureModel } from 'src/app/data/models/FeatureModel';
import { ImageModel } from 'src/app/data/models/ImageModel';
import { StaticInfo } from 'src/app/data/static/main-info';

@Component({
  selector: 'app-trip-card',
  templateUrl: './single-trip-card.component.html',
  styleUrls: ['./single-trip-card.component.scss'],
})
export class SingleTripCardComponent implements OnInit {
  @Input() name: string = '';
  @Input() duration: number = 0;
  @Input() price: number;
  @Input() currency:string;
  @Input() img: ImageModel | undefined;
  @Input() features: FeatureModel[] = [];
  @Input() id: string = '';
  @Input() isOffer: boolean = true;

  constructor(private router: Router, private activeRoute: ActivatedRoute) {}

  ngOnInit(): void {}

  goToOffer() {
    if (!this.id) throw 'please provide a valid id';
    if (this.isOffer) this.router.navigate([StaticInfo.tourInfoRoute, this.id]);
    else
      this.router.navigate([StaticInfo.offersRoute], {
        queryParams: { city: this.id },
      });
  }
}
