import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-carousel',
  templateUrl: './banner-carousel.component.html',
  styleUrls: ['./banner-carousel.component.scss'],
})
export class BannerCarouselComponent implements OnInit {
  constructor() {}

  @Input() images: string[];
  @Input() screenHeightPercentage: number;
  @Input() overlayOpacity = 25;
  currentSwiperIndex = 0;

  ngOnInit(): void {}

  swipe(right: boolean) {
    if (right && this.currentSwiperIndex + 1 < this.images.length) {
      this.currentSwiperIndex++;
    } else if (!right && this.currentSwiperIndex > 0) {
      this.currentSwiperIndex--;
    }
  }
}
