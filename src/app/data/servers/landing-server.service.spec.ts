import { TestBed } from '@angular/core/testing';

import { LandingServerService } from './landing-server.service';

describe('LandingServerService', () => {
  let service: LandingServerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LandingServerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
