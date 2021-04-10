import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JellyVectorComponent } from './jelly-vector.component';

describe('JellyVectorComponent', () => {
  let component: JellyVectorComponent;
  let fixture: ComponentFixture<JellyVectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JellyVectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JellyVectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
