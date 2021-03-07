import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-trip-extra',
  templateUrl: './trip-extra.component.html',
  styleUrls: ['./trip-extra.component.scss'],
})
export class TripExtraComponent implements OnInit {
  @Input() hascar: boolean = true;
  @Input() hasairport: boolean = false;
  @Input() hasbreakfast: boolean = false;
  constructor() {}

  ngOnInit(): void {}
}
