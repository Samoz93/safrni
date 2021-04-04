import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileLandingComponent } from './user-profile-landing.component';

describe('UserProfileLandingComponent', () => {
  let component: UserProfileLandingComponent;
  let fixture: ComponentFixture<UserProfileLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserProfileLandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
