import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoLocationTabComponent } from './info-location-tab.component';

describe('InfoLocationTabComponent', () => {
  let component: InfoLocationTabComponent;
  let fixture: ComponentFixture<InfoLocationTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoLocationTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoLocationTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
