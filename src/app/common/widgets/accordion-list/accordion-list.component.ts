import { Component, Input, OnInit } from '@angular/core';
import { AccordionListItem } from './accordion-list-item';

@Component({
  selector: 'app-accordion-list',
  templateUrl: './accordion-list.component.html',
  styleUrls: ['./accordion-list.component.scss'],
})
export class AccordionListComponent implements OnInit {
  constructor() {}

  @Input() items: AccordionListItem[];

  openHeaders: boolean[] = [];
  ngOnInit(): void {
    this.openHeaders = new Array(this.items.length).fill(false);
    this.openHeaders[0] = true;
  }

  toggleHeader(headerIndex: number) {
    this.openHeaders = new Array(this.items.length).fill(false);
    this.openHeaders[headerIndex] = true
  }
}
