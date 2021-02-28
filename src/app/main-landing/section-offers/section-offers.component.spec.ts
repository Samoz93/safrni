import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionOffersComponent } from './section-offers.component';

describe('SectionOffersComponent', () => {
  let component: SectionOffersComponent;
  let fixture: ComponentFixture<SectionOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionOffersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
