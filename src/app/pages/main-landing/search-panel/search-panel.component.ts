import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.scss'],
})
export class SearchPanelComponent implements OnInit {
  tripTypes = [
    { id: '1', name: 'normal' },
    { id: '2', name: 'medical' },
  ];

  selectedType: string;
  constructor() {}

  ngOnInit(): void {}
}
