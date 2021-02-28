import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferInfoLandingComponent } from './offer-info-landing.component';

describe('OfferInfoLandingComponent', () => {
  let component: OfferInfoLandingComponent;
  let fixture: ComponentFixture<OfferInfoLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferInfoLandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferInfoLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
