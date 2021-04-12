import { Component, Input, OnInit } from '@angular/core';
import { TripOptions } from 'src/app/data/models/variousModels';

@Component({
  selector: 'app-trip-extra',
  templateUrl: './trip-extra.component.html',
  styleUrls: ['./trip-extra.component.scss'],
})
export class TripExtraComponent implements OnInit {
  @Input() options: TripOptions = new TripOptions(false, false, false);
  @Input() isBlack: boolean = true;
  @Input() isBig: boolean = false;
  constructor() {}

  ngOnInit(): void {}
}
