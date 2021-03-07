import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleTripCardComponent } from './single-trip-card.component';

describe('SingleTripCardComponent', () => {
  let component: SingleTripCardComponent;
  let fixture: ComponentFixture<SingleTripCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleTripCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleTripCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
