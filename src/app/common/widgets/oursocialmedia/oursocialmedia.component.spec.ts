import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OursocialmediaComponent } from './oursocialmedia.component';

describe('OursocialmediaComponent', () => {
  let component: OursocialmediaComponent;
  let fixture: ComponentFixture<OursocialmediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OursocialmediaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OursocialmediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
