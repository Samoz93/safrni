import { Component, OnInit } from '@angular/core';
import { StaticInfo } from 'src/app/data/static/main-info';

@Component({
  selector: 'app-header-tool-bar',
  templateUrl: './header-tool-bar.component.html',
  styleUrls: ['./header-tool-bar.component.scss'],
})
export class HeaderToolBarComponent implements OnInit {
  projectName = StaticInfo.projectName;
  constructor() {}

  ngOnInit(): void {}
}
