import { Component, Input, OnInit } from '@angular/core';
import { LocalService } from 'src/app/data/services/local.service';

@Component({
  selector: 'app-banner-carousel',
  templateUrl: './banner-carousel.component.html',
  styleUrls: ['./banner-carousel.component.scss'],
})
export class BannerCarouselComponent implements OnInit {
  constructor(private loc: LocalService) {}

  @Input() images: string[];
  @Input() screenHeightPercentage: number;
  @Input() overlayOpacity = 25;
  currentSwiperIndex = 0;

  ngOnInit(): void {}

  swipe(right: boolean) {
    let dir = this.loc.locale === 'ar' ? !right : right;
    if (dir && this.currentSwiperIndex + 1 < this.images.length) {
      this.currentSwiperIndex++;
    } else if (!dir && this.currentSwiperIndex > 0) {
      this.currentSwiperIndex--;
    }
  }
}
