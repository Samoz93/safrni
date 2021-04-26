import { AgmMap } from '@agm/core';
import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';

import { LocationModel } from 'src/app/data/models/LocationModel';
import { TimelineItemModel } from 'src/app/data/models/timelineModel';

import {
  AccordionListItem,
  AccordionListItemOption,
} from '../accordion-list/accordion-list-item';
import { AccordionClickEventData } from '../accordion-list/accordion-list.component';

@Component({
  selector: 'app-map-stepper',
  templateUrl: './map-stepper.component.html',
  styleUrls: ['./map-stepper.component.scss'],
})
export class MapStepperComponent implements OnInit, AfterViewInit {
  constructor() {}

  currentLat: number;
  currentLong: number;
  restriction = {
    latLngBounds: {
      east: 44.7939896991,
      north: 42.1414848903,
      south: 35.8215347357,
      west: 26.0433512713,
    },
    strictBounds: true,
  };
  map: AgmMap;
  zoom: number = 10;

  accordionItems: AccordionListItem[] = [];
  allLocationsSorted: LocationModel[] = [];
  ngAfterViewInit(): void {
    this.agmMap.mapReady.subscribe((map) => {
      this.map = map;
    });
  }
  @Input('timelines') timelines: TimelineItemModel[];
  @ViewChild('agmMap') agmMap: AgmMap;

  ngOnInit(): void {
    this.timelines.forEach((timeline) => {
      this.accordionItems.push(
        new AccordionListItem(
          timeline.locations.map((location) => {
            return new AccordionListItemOption(location.id, location.name);
          })
        )
      );
      this.allLocationsSorted.push(...timeline.locations);
    });

    this.currentLat = this.timelines[0].locations[0].geo.latitude;
    this.currentLong = this.timelines[1].locations[0].geo.longitude;
  }

  locationOverlayClicked(lat: number, long: number) {
    this.currentLat = lat;
    this.currentLong = long;
    this.zoom = 10;
  }

  onLocationClicked(data: AccordionClickEventData) {
    this.currentLat = this.timelines[data.parentIndex].locations[
      data.childIndex
    ].geo.latitude;
    this.currentLong = this.timelines[data.parentIndex].locations[
      data.childIndex
    ].geo.longitude;
  }
}
