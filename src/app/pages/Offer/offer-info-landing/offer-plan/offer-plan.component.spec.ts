import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferPlanComponent } from './offer-plan.component';

describe('OfferPlanComponent', () => {
  let component: OfferPlanComponent;
  let fixture: ComponentFixture<OfferPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferPlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
