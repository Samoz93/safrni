import { Component, OnInit } from '@angular/core';
import { LocalService } from 'src/app/data/services/local.service';
import { StaticInfo } from 'src/app/data/static/main-info';

@Component({
  selector: 'app-header-info',
  templateUrl: './header-info.component.html',
  styleUrls: ['./header-info.component.scss'],
})
export class HeaderInfoComponent implements OnInit {

  ngOnInit(): void {}

  email = StaticInfo.email;
  phone = StaticInfo.phoneNumber;
}
