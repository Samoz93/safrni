import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FeatureModel } from 'src/app/data/models/FeatureModel';
import { ImageModel } from 'src/app/data/models/ImageModel';
import { priceData } from 'src/app/data/pipes/price-caculator.pipe';
import { LocalService } from 'src/app/data/services/local.service';
import { StaticInfo } from 'src/app/data/static/main-info';
import { ICONS } from 'src/app/data/utils/enums';

@Component({
  selector: 'app-trip-card',
  templateUrl: './single-trip-card.component.html',
  styleUrls: ['./single-trip-card.component.scss'],
})
export class SingleTripCardComponent implements OnInit {
  @Input() name: string = '';
  @Input() duration: number = 0;
  @Input() peopleCount: number = 0;
  @Input() price: priceData;
  @Input() img: ImageModel | undefined;
  @Input() id: string = '';
  @Input() isOffer: boolean = true;
  icons = ICONS;
  constructor(private router: Router, private loc: LocalService) {}

  ngOnInit(): void {}

  goToOffer() {
    if (!this.id) throw 'please provide a valid id';
    if (this.isOffer)
      this.router.navigate([StaticInfo.tourInfoRoute, this.id], {
        queryParamsHandling: 'preserve',
      });
    else
      this.router.navigate([StaticInfo.offersRoute], {
        queryParams: { cityId: this.id },
      });
  }
}
