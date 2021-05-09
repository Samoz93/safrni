import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionDailyTripsComponent } from './section-daily-trips.component';

describe('SectionDailyTripsComponent', () => {
  let component: SectionDailyTripsComponent;
  let fixture: ComponentFixture<SectionDailyTripsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionDailyTripsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionDailyTripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
