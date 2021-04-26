import { AgmMap } from '@agm/core';
import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { LocationModel } from 'src/app/data/models/LocationModel';

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
  zoom: number = 15;

  ngAfterViewInit(): void {
    this.agmMap.mapReady.subscribe((map) => {
      this.map = map;
    });
  }
  @Input('mapSteps') mapSteps: LocationModel[];
  @ViewChild('agmMap') agmMap: AgmMap;

  ngOnInit(): void {
    this.currentLat = this.mapSteps[0].geo.latitude;
    this.currentLong = this.mapSteps[1].geo.longitude;
  }

  locationOverlayClicked(lat: number, long: number) {
    this.currentLat = lat;
    this.currentLong = long;
    this.zoom = 15;
  }
}
