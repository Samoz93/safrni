import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BookingSubmitPopupComponent } from 'src/app/common/widgets/booking-submit-popup/booking-submit-popup.component';
import { LocalService } from 'src/app/data/services/local.service';
import { AboutusGQL } from 'src/app/data/services/saferniGraphql.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent implements OnInit {
  aboutUsText: string;
  services: { service: string; image: string }[];

  constructor(
    private aboutusService: AboutusGQL,
    private localeService: LocalService
  ) {}

  ngOnInit(): void {
    this.aboutusService
      .fetch({ locale: this.localeService.locale })
      .subscribe((data) => {
        this.aboutUsText = data.data.aboutUsText?.aboutUsText ?? '';
        this.services =
          data.data.aboutUsText?.Service?.map((service) => {
          return {
              service: service?.ServiceName ?? '',
              image: environment.api + service?.image?.url ?? '',
            };
          }) ?? [];
      });
  }
}
