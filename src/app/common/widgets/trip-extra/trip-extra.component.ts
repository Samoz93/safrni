import { Component, Input, OnInit } from '@angular/core';
import { Feature } from 'src/app/data/models/TripModel';
import { FeatureEnum } from 'src/app/data/static/main-info';

@Component({
  selector: 'app-trip-extra',
  templateUrl: './trip-extra.component.html',
  styleUrls: ['./trip-extra.component.scss'],
})
export class TripExtraComponent implements OnInit {
  enum = FeatureEnum;
  @Input() features: Feature[];
  @Input() isBlack: boolean = true;
  @Input() isBig: boolean = false;
  constructor() {}

  ngOnInit(): void {}
}
