import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoverableItemComponent } from './hoverable-item.component';

describe('HoverableItemComponent', () => {
  let component: HoverableItemComponent;
  let fixture: ComponentFixture<HoverableItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoverableItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HoverableItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
