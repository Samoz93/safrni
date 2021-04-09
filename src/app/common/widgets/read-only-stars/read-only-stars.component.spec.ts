import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadOnlyStarsComponent } from './read-only-stars.component';

describe('ReadOnlyStarsComponent', () => {
  let component: ReadOnlyStarsComponent;
  let fixture: ComponentFixture<ReadOnlyStarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadOnlyStarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadOnlyStarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
