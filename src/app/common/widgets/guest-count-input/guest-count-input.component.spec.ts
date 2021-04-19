import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestCountInputComponent } from './guest-count-input.component';

describe('GuestCountInputComponent', () => {
  let component: GuestCountInputComponent;
  let fixture: ComponentFixture<GuestCountInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestCountInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestCountInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
