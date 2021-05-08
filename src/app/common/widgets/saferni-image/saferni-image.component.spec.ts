import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaferniImageComponent } from './saferni-image.component';

describe('SaferniImageComponent', () => {
  let component: SaferniImageComponent;
  let fixture: ComponentFixture<SaferniImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaferniImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaferniImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
