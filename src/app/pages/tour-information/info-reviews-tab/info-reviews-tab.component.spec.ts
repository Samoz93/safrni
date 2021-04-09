import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoReviewsTabComponent } from './info-reviews-tab.component';

describe('InfoReviewsTabComponent', () => {
  let component: InfoReviewsTabComponent;
  let fixture: ComponentFixture<InfoReviewsTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoReviewsTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoReviewsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
