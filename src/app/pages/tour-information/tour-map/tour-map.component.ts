import { AgmMap, MapTypeStyle } from '@agm/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import {
  AccordionListItem,
  AccordionListItemOption,
} from 'src/app/common/widgets/accordion-list/accordion-list-item';
import { AccordionClickEventData } from 'src/app/common/widgets/accordion-list/accordion-list.component';

import { LocationModel } from 'src/app/data/models/LocationModel';
import { TimelineItemModel } from 'src/app/data/models/timelineModel';

@Component({
  selector: 'app-tour-map',
  templateUrl: './tour-map.component.html',
  styleUrls: ['./tour-map.component.scss'],
})
export class TourMapComponent implements OnInit {
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

  @ViewChild('agmMap') agmMap: AgmMap;

  ngOnInit(): void {
    this.currentLat = this.timelines[0].locations[0].geo.latitude;
    this.currentLong = this.timelines[0].locations[0].geo.longitude;

    this.sidebarLocation = this.timelines[0].locations[0];

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
  }

  recenterMapToLocation(location: LocationModel) {
    if (location) {
      this.currentLat = location.geo.latitude;
      this.currentLong = location.geo.longitude;
      this.zoom += 10;

      this.sidebarLocation = location;
    }
  }
  nextDestination() {
    let indexOfCurrent = this.allLocationsSorted.indexOf(this.sidebarLocation);
    if (
      indexOfCurrent != null &&
      indexOfCurrent + 1 < this.allLocationsSorted.length
    ) {
      this.recenterMapToLocation(this.allLocationsSorted[++indexOfCurrent]);
    }
  }
  prevDestination() {
    let indexOfCurrent = this.allLocationsSorted.indexOf(this.sidebarLocation);
    if (indexOfCurrent != null && indexOfCurrent > 0) {
      this.recenterMapToLocation(this.allLocationsSorted[--indexOfCurrent]);
    }
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
  timelines = [
    new TimelineItemModel(1, [
      new LocationModel(
        '1',
        'https://i4.hurimg.com/i/hurriyet/75/0x0/5f0867e50f254420f0a144e0.jpg',
        'aya sofya',
        'a random place in instanbul',
        { latitude: 41.008583, longitude: 28.980175 }
      ),
    ]),
    new TimelineItemModel(2, [
      new LocationModel(
        '2',
        'https://i.ytimg.com/vi/no7LCcGTvn8/maxresdefault.jpg',
        'kiz kulesi',
        'a random place in instanbul',
        { latitude: 41.0191765, longitude: 29.00444 }
      ),
      new LocationModel(
        '4',
        'https://image.tatilbudur.com/aboutinfo/602fba55f6de65928ad2530a0f9f20a2.jpg',
        'Sile sahili',
        'a random place in instanbul',
        { latitude: 41.1664882, longitude: 29.5802089 }
      ),
    ]),
    new TimelineItemModel(3, [
      new LocationModel(
        '2',
        'https://tatilsepeti.cubecdn.net/images/Yalova-Termal-Otelleri.jpg',
        'Termal',
        'a random place in instanbul',
        { latitude: 40.6056569, longitude: 29.1723517 }
      ),
    ]),
  ];
}
