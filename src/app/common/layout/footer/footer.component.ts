import { Component, OnInit } from '@angular/core';
import { StaticInfo } from 'src/app/data/static/main-info';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  projectName = StaticInfo.projectName;
  phone = StaticInfo.phoneNumber;
  email = StaticInfo.Email;
  constructor() {}

  ngOnInit(): void {}
}
