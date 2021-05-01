import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { AccordionListItem } from './accordion-list-item';

export type AccordionClickEventData = {
  parentIndex: number;
  childIndex: number;
};

@Component({
  selector: 'app-accordion-list',
  templateUrl: './accordion-list.component.html',
  styleUrls: ['./accordion-list.component.scss'],
})
export class AccordionListComponent implements OnInit {
  constructor() {}

  @Input() items: AccordionListItem[];
  @Output() itemClicked = new EventEmitter<AccordionClickEventData>();

  openHeaders: boolean[] = [];
  ngOnInit(): void {
    this.openHeaders = new Array(this.items.length).fill(false);
    this.openHeaders[0] = true;
  }

  toggleHeader(headerIndex: number) {
    if (this.openHeaders[headerIndex]) {
      this.openHeaders[headerIndex] = false;
    } else {
      // this.openHeaders = new Array(this.items.length).fill(false);
      this.openHeaders[headerIndex] = true;
    }
  }
  onItemClicked(item: AccordionClickEventData) {
    this.itemClicked.emit(item);
  }
}
