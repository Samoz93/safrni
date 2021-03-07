import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-cities',
  templateUrl: './section-cities.component.html',
  styleUrls: ['./section-cities.component.scss'],
})
export class SectionCitiesComponent implements OnInit {
  cities = [
    {
      name: 'Istanbul',
      image:
        'https://idsb.tmgrup.com.tr/ly/uploads/images/2020/04/17/thumbs/800x531/31299.jpg',
      longX: true,
    },
    {
      name: 'Istanbul',
      image:
        'https://idsb.tmgrup.com.tr/ly/uploads/images/2020/04/17/thumbs/800x531/31299.jpg',
    },
    {
      name: 'Istanbul',
      image:
        'https://idsb.tmgrup.com.tr/ly/uploads/images/2020/04/17/thumbs/800x531/31299.jpg',
    },
    {
      name: 'Bursa',
      image:
        'https://img.otelz.com/s3/placeimages/turkey/marmara/bursa_bursa-sultan-kent-9463ce.jpg',
    },
    {
      name: 'Trabzon',
      longY: true,
      image:
        'https://www.ulutour.com.tr/cropped/?src=inc/dosyalar/page_284/img/1539589843-trabzon_sehir.jpg&w=1920&h=1080',
    },
    {
      name: 'Bolu',
      image:
        'https://i12.haber7.net//haber/haber7/photos/2020/15/boluda_gezilecek_yerler_listesi_10_farkli_adres_1586701032_772.jpg',
    },
    {
      name: 'Cappadocia ',
      image: 'https://i.hurimg.com/i/hdn/75/0x0/5cc305f3c03c0e264c998b7b.jpg',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
