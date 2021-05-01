import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapStepperComponent } from './map-stepper.component';

describe('MapStepperComponent', () => {
  let component: MapStepperComponent;
  let fixture: ComponentFixture<MapStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapStepperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
