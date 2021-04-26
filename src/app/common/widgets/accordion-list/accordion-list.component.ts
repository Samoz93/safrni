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

  ngOnInit(): void {}
}
