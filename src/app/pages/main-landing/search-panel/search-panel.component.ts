import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ICONS } from 'src/app/data/uitls/enums';

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
  selctedTrip: string = '';
  form: FormGroup;
  icons = ICONS;
  selectedType: string;
  constructor(public fb: FormBuilder) {
    this.form = fb.group({
      whereTo: ['sasdasd', Validators.required],
      guest: {
        adult: 1,
        child: 0,
        infant: 0,
      },
      travelType: '1',
      date: new Date(),
    });
  }

  ngOnInit(): void {}
}
