import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalListviewComponent } from './horizontal-listview.component';

describe('HorizontalListviewComponent', () => {
  let component: HorizontalListviewComponent;
  let fixture: ComponentFixture<HorizontalListviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorizontalListviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizontalListviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
