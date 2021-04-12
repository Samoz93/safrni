import { TestBed } from '@angular/core/testing';

import { OfferSeviceService } from './offer-sevice.service';

describe('OfferSeviceService', () => {
  let service: OfferSeviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OfferSeviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
