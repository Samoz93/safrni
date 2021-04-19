import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTripCardComponent } from './user-trip-card.component';

describe('UserTripCardComponent', () => {
  let component: UserTripCardComponent;
  let fixture: ComponentFixture<UserTripCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserTripCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTripCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
