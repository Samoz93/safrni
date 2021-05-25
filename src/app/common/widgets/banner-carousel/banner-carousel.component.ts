import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { LocalService } from 'src/app/data/services/local.service';
import { SwiperComponent } from 'swiper/angular';
import SwiperCore, { Autoplay, Navigation } from 'swiper/core';

SwiperCore.use([Autoplay, Navigation]);

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
  @ViewChild('swiper') swiper: SwiperComponent;
  ngOnInit(): void {}

  swipe(right: boolean) {
    Object(this.swiper.navigation)[!right ? 'prevEl' : 'nextEl'].click();
  }
}
