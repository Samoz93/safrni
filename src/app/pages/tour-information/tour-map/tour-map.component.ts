import { AgmMap, MapTypeStyle } from '@agm/core';
import {
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  QueryList,
  Renderer2,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import {
  AccordionListItem,
  AccordionListItemOption,
} from 'src/app/common/widgets/accordion-list/accordion-list-item';
import { AccordionClickEventData } from 'src/app/common/widgets/accordion-list/accordion-list.component';
import { BingImageModel } from 'src/app/data/models/bingImageModel';
import { LocationModel } from 'src/app/data/models/LocationModel';
import { TripModel } from 'src/app/data/models/TripModel';
import { BingImageService } from 'src/app/data/services/bing-image.service';
import { LocalService } from 'src/app/data/services/local.service';
import { Enum_Componenttimelinetimeline_Transportationtype } from 'src/app/data/services/saferniGraphql.service';
import { TripService } from 'src/app/data/services/trip.service';

@Component({
  selector: 'app-tour-map',
  templateUrl: './tour-map.component.html',
  styleUrls: ['./tour-map.component.scss'],
})
export class TourMapComponent implements OnInit, OnDestroy {
  constructor(
    private activeRoute: ActivatedRoute,
    private ren: Renderer2,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private loc: LocalService,
    private bing: BingImageService
  ) {}

  @ViewChildren('overlayContainer') overlayContainer: QueryList<ElementRef>;

  routeSub: Subscription;
  selectedImageIndex = 0;
  trip: TripModel;

  sideBarVisibility = true;
  mobileSheetExpanded = false;
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
  planLocations: LocationModel[] = [];
  accordionItems: AccordionListItem[] = [];
  allImages: BingImageModel[] = [];

  ngAfterViewInit(): void {
    this.agmMap.mapReady.subscribe((map) => {
      this.map = map;
    });
  }

  @ViewChild('agmMap') agmMap: AgmMap;

  async ngOnInit(): Promise<void> {
    // window.onscroll = function () {
    //   window.scrollTo(1110, 11110);
    // };

    this.routeSub = this.activeRoute.data.subscribe((data) => {
      this.trip = data.mapTripData.trip;
      this.planLocations = data.mapTripData.locations;

      this.initMapPosition();
      if (this.sidebarLocation) this._setImages(this.sidebarLocation);
    });
  }

  async _initBingImages(locationName: string) {
    this.allImages.push(...(await this.bing.getImage(locationName)));
  }
  zoomChange(event: any) {
    console.log(event);
  }

  onOverlayHover(id: any) {
    let container =
      this.overlayContainer.first.nativeElement.childNodes[0].childNodes[0].querySelectorAll(
        '.location-overlay'
      )[0].parentElement.parentElement;

    container.childNodes.forEach((child: any) => {
      let overlay = child.querySelector('.location-overlay');
      if (overlay.getAttribute('id') === id) {
        this.ren.setStyle(overlay.parentElement, 'z-index', 9);
      } else {
        this.ren.setStyle(overlay.parentElement, 'z-index', 1);
      }
    });
    // .querySelector(`#${CSS.escape(id)}`)
  }
  initMapPosition() {
    this.trip.plan.forEach((dayPlan) => {
      if (dayPlan.restDay) {
        this.accordionItems.push(
          new AccordionListItem([
            new AccordionListItemOption(
              'none',
              this.loc.getTranslation(`Transportationtype.restDay`)
            ),
          ])
        );
      } else if (
        dayPlan.transportationType ==
          Enum_Componenttimelinetimeline_Transportationtype.Arrival ||
        dayPlan.transportationType ==
          Enum_Componenttimelinetimeline_Transportationtype.Departure ||
        dayPlan.transportationType ==
          Enum_Componenttimelinetimeline_Transportationtype.BetweenCities
      ) {
        let str = this.loc.getTranslation(
          `Transportationtype.${dayPlan.transportationType}`
        );
        if (
          dayPlan.transportationType ==
          Enum_Componenttimelinetimeline_Transportationtype.BetweenCities
        ) {
          str = this.loc.getTranslation(
            `Transportationtype.${dayPlan.transportationType}`,
            { var: dayPlan.travelTo?.name ?? '' }
          );
        }
        this.accordionItems.push(
          new AccordionListItem([new AccordionListItemOption('none', str)])
        );
      } else {
        this.accordionItems.push(
          new AccordionListItem(
            (dayPlan.dayLocations ?? []).map((location) => {
              return new AccordionListItemOption(
                location.locationId,
                location.locationName
              );
            })
          )
        );
      }
    });

    let queryParamLocationId =
      this.activatedRoute.snapshot.queryParams.location;
    if (queryParamLocationId) {
      let location = this.planLocations.find(
        (l) => l.id === queryParamLocationId
      );
      if (location) {
        this.recenterMapToLocation(location, false);
      } else {
        this.currentLat = this.planLocations[0].geo.latitude;
        this.currentLong = this.planLocations[0].geo.longitude;
        this.sidebarLocation = this.planLocations[0];
      }
    } else {
      this.currentLat = this.planLocations[0].geo.latitude;
      this.currentLong = this.planLocations[0].geo.longitude;
      this.sidebarLocation = this.planLocations[0];
    }
  }
  recenterMapToLocation(location: LocationModel, bringToFront = true) {
    if (location) {
      this.currentLat = location.geo.latitude;
      this.currentLong = location.geo.longitude;
      this.zoom += 10;
      this.selectedImageIndex = 0;
      this.sidebarLocation = location;

      this.router.navigate([], {
        relativeTo: this.activatedRoute,
        queryParams: { location: location.id },
        queryParamsHandling: 'merge',
        replaceUrl: true,
      });

      if (bringToFront) this.onOverlayHover(location.id);
      this._setImages(location);
    }
  }
  onImageSliderClicked(imageIndex: number) {
    this.selectedImageIndex = imageIndex;
  }
  nextDestination(): void {
    this.selectedImageIndex = 0;
    let indexOfCurrent = this.planLocations.indexOf(this.sidebarLocation);
    if (
      indexOfCurrent != null &&
      indexOfCurrent + 1 < this.planLocations.length
    ) {
      const loc = this.planLocations[++indexOfCurrent];
      this.recenterMapToLocation(loc);
    }
  }
  prevDestination(): void {
    this.selectedImageIndex = 0;
    let indexOfCurrent = this.planLocations.indexOf(this.sidebarLocation);
    if (indexOfCurrent != null && indexOfCurrent > 0) {
      const loc = this.planLocations[--indexOfCurrent];
      this.recenterMapToLocation(loc);
    }
  }
  hasNextLocation(): boolean {
    let indexOfCurrent = this.planLocations.indexOf(this.sidebarLocation);

    return (
      indexOfCurrent != null && indexOfCurrent + 1 < this.planLocations.length
    );
  }
  hasPrevLocation(): boolean {
    let indexOfCurrent = this.planLocations.indexOf(this.sidebarLocation);
    return indexOfCurrent != null && indexOfCurrent > 0;
  }
  toggleSidebar() {
    this.sideBarVisibility = !this.sideBarVisibility;
  }
  onLocationClicked(data: AccordionClickEventData) {
    let location =
      this.trip.plan[data.parentIndex].dayLocations![data.childIndex];

    if (location) {
      this.recenterMapToLocation(
        this.planLocations.find((loc) => loc.id === location.locationId)!
      );
    }
  }

  _setImages(location: LocationModel) {
    const ourImages: BingImageModel[] = location.images.map((f) => {
      const model: BingImageModel = {
        url: f.url,
        thumb: f.formats?.thumbnail?.url!,
      };
      return model;
    });
    this.allImages = [];
    this.allImages.push(...ourImages);
    this._initBingImages(location.name);
  }
  toggleMobileSheet() {
    this.mobileSheetExpanded = !this.mobileSheetExpanded;
  }
  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
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

  //full screen
  get imageListObject() {
    const data = this.allImages.map((f) => {
      return {
        image: f.url,
        thumbImage: f.thumb,
        title: this.sidebarLocation.name,
        alt: this.sidebarLocation.desc,
      };
    });

    return data;
  }
  // get imagesUrl() {
  //   const data = this.allImages.map((f) => f.url);

  //   return data;
  // }
  showFullImage() {}
  //ExpandedSection
  showFlag: boolean = false;
}
