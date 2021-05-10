import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferLocationComponent } from './offer-location.component';

describe('OfferLocationComponent', () => {
  let component: OfferLocationComponent;
  let fixture: ComponentFixture<OfferLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OfferLocationComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
