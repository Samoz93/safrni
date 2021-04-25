import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageInputComponent } from './main-page-input.component';

describe('MainPageInputComponent', () => {
  let component: MainPageInputComponent;
  let fixture: ComponentFixture<MainPageInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPageInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
