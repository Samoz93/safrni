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
  @Input() centeredTexts:string[] | undefined;
  @Input() screenHeightPercentage: number;
  @Input() overlayOpacity = 25;
  @ViewChild('swiper') swiper: SwiperComponent;

  index = 0;
  ngOnInit(): void {}

  swipe(right: boolean) {
    let isLeft = !right;
    if (this.loc.locale == 'ar') isLeft = !isLeft;
    Object(this.swiper.navigation)[isLeft ? 'prevEl' : 'nextEl'].click();
  }
  indexChanged(newIndex:number){
    this.index = newIndex;
  }
}
