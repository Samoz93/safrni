import { Component, Input, OnInit } from '@angular/core';
import { NgxPopperjsPlacements, NgxPopperjsTriggers } from 'ngx-popperjs';
import { FeatureModel } from 'src/app/data/models/FeatureModel';

@Component({
  selector: 'app-trip-extra',
  templateUrl: './trip-extra.component.html',
  styleUrls: ['./trip-extra.component.scss'],
})
export class TripExtraComponent implements OnInit {
  @Input() features: FeatureModel[];
  @Input() isBlack: boolean = true;
  @Input() isBig: boolean = false;
  constructor() {}

  ngOnInit(): void {}
}
