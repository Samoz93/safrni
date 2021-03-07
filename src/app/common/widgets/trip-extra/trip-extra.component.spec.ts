import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripExtraComponent } from './trip-extra.component';

describe('TripExtraComponent', () => {
  let component: TripExtraComponent;
  let fixture: ComponentFixture<TripExtraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TripExtraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TripExtraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
