import { AgmMap, MapTypeStyle } from '@agm/core';
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

  sideBarVisibility = true;
  sidebarLocation: LocationModel;

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
  zoom: number = 15;

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

    this.sidebarLocation = this.timelines[0].locations[0];
  }

  locationOverlayClicked(lat: number, long: number) {
    this.currentLat = lat;
    this.currentLong = long;
    this.zoom += 10;
  }
  toggleSidebar() {
    this.sideBarVisibility = !this.sideBarVisibility;
  }
  onLocationClicked(data: AccordionClickEventData) {
    this.currentLat = this.timelines[data.parentIndex].locations[
      data.childIndex
    ].geo.latitude;
    this.currentLong = this.timelines[data.parentIndex].locations[
      data.childIndex
    ].geo.longitude;
    this.zoom += 10;

    this.sidebarLocation = this.timelines[data.parentIndex].locations[
      data.childIndex
    ];
  }
  styles: MapTypeStyle[] = [
    {
      featureType: 'administrative.country',
      elementType: 'all',
      stylers: [
        {
          color: '#010000',
        },
        {
          weight: 1.18,
        },
      ],
    },
    {
      featureType: 'administrative.country',
      elementType: 'labels.text',
      stylers: [
        {
          weight: 0.12,
        },
      ],
    },
    {
      featureType: 'landscape',
      elementType: 'all',
      stylers: [
        {
          hue: '#FFA800',
        },
        {
          gamma: 1,
        },
      ],
    },
    {
      featureType: 'landscape.natural',
      elementType: 'all',
      stylers: [
        {
          hue: '#baff00',
        },
      ],
    },
    {
      featureType: 'landscape.natural',
      elementType: 'geometry.fill',
      stylers: [
        {
          visibility: 'on',
        },
        {
          saturation: 8,
        },
        {
          lightness: 6,
        },
      ],
    },
    {
      featureType: 'landscape.natural',
      elementType: 'geometry.stroke',
      stylers: [
        {
          visibility: 'on',
        },
      ],
    },
    {
      featureType: 'landscape.natural',
      elementType: 'labels.text',
      stylers: [
        {
          visibility: 'on',
        },
      ],
    },
    {
      featureType: 'landscape.natural',
      elementType: 'labels.text.stroke',
      stylers: [
        {
          visibility: 'off',
        },
        {
          color: '#cd1010',
        },
      ],
    },
    {
      featureType: 'landscape.natural',
      elementType: 'labels.icon',
      stylers: [
        {
          saturation: -10,
        },
        {
          color: '#e62222',
        },
      ],
    },
    {
      featureType: 'landscape.natural.landcover',
      elementType: 'labels.text.fill',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      featureType: 'landscape.natural.landcover',
      elementType: 'labels.text.stroke',
      stylers: [
        {
          visibility: 'simplified',
        },
        {
          weight: 0.92,
        },
      ],
    },
    {
      featureType: 'poi',
      elementType: 'all',
      stylers: [
        {
          saturation: 33.4,
        },
        {
          lightness: -25.4,
        },
        {
          gamma: 1,
        },
        {
          color: '#a2c037',
        },
      ],
    },
    {
      featureType: 'poi',
      elementType: 'geometry.fill',
      stylers: [
        {
          visibility: 'on',
        },
        {
          color: '#d7e0ef',
        },
      ],
    },
    {
      featureType: 'poi',
      elementType: 'geometry.stroke',
      stylers: [
        {
          visibility: 'simplified',
        },
      ],
    },
    {
      featureType: 'poi',
      elementType: 'labels.text.fill',
      stylers: [
        {
          visibility: 'on',
        },
        {
          color: '#000000',
        },
      ],
    },
    {
      featureType: 'poi',
      elementType: 'labels.text.stroke',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      featureType: 'poi.park',
      elementType: 'geometry.fill',
      stylers: [
        {
          color: '#95c11e',
        },
        {
          lightness: 26,
        },
        {
          saturation: 7,
        },
      ],
    },
    {
      featureType: 'poi.park',
      elementType: 'labels.text.fill',
      stylers: [
        {
          saturation: 63,
        },
        {
          weight: 10.0,
        },
        {
          lightness: -30,
        },
        {
          gamma: 0.0,
        },
      ],
    },
    {
      featureType: 'poi.park',
      elementType: 'labels.icon',
      stylers: [
        {
          hue: '#ff9900',
        },
      ],
    },
    {
      featureType: 'road.highway',
      elementType: 'all',
      stylers: [
        {
          hue: '#53ff00',
        },
        {
          saturation: -73,
        },
        {
          lightness: 40,
        },
        {
          gamma: 1,
        },
      ],
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry.fill',
      stylers: [
        {
          color: '#f9dc0a',
        },
        {
          lightness: 25,
        },
        {
          saturation: 100,
        },
        {
          weight: 0.9,
        },
      ],
    },
    {
      featureType: 'road.arterial',
      elementType: 'all',
      stylers: [
        {
          hue: '#FBFF00',
        },
        {
          gamma: 1,
        },
      ],
    },
    {
      featureType: 'road.local',
      elementType: 'all',
      stylers: [
        {
          hue: '#00FFFD',
        },
        {
          lightness: 30,
        },
        {
          gamma: 1,
        },
      ],
    },
    {
      featureType: 'transit.line',
      elementType: 'all',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      featureType: 'water',
      elementType: 'all',
      stylers: [
        {
          hue: '#00BFFF',
        },
        {
          saturation: 6,
        },
        {
          lightness: 8,
        },
        {
          gamma: 1,
        },
      ],
    },
  ];
}
