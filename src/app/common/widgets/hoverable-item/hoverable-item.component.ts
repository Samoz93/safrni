import { Component, Input, OnInit } from '@angular/core';
import { NgxPopperjsPlacements, NgxPopperjsTriggers } from 'ngx-popperjs';

@Component({
  selector: 'app-hoverable-item',
  templateUrl: './hoverable-item.component.html',
  styleUrls: ['./hoverable-item.component.scss'],
})
export class HoverableItemComponent implements OnInit {
  @Input() img: string;
  @Input() title: string;
  @Input() desc: string;
  placement = NgxPopperjsPlacements;
  triggers = NgxPopperjsTriggers;

  constructor() {}

  ngOnInit(): void {}
}
