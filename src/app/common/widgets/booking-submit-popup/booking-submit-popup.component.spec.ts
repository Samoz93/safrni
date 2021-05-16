import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingSubmitPopupComponent } from './booking-submit-popup.component';

describe('BookingSubmitPopupComponent', () => {
  let component: BookingSubmitPopupComponent;
  let fixture: ComponentFixture<BookingSubmitPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingSubmitPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingSubmitPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
