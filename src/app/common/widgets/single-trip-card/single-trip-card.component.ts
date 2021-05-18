import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FeatureModel } from 'src/app/data/models/FeatureModel';
import { ImageModel } from 'src/app/data/models/ImageModel';
import { LocalService } from 'src/app/data/services/local.service';
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
  @Input() currency: string;
  @Input() img: ImageModel | undefined;
  @Input() features: FeatureModel[] = [];
  @Input() id: string = '';
  @Input() isOffer: boolean = true;

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

  get priceStr() {
    if (!this.currency) return `${this.price} ${this.currency}`;
    return this.loc.getTranslation('currencies.' + this.currency, {
      var: this.price.toString(),
    });
  }
}
