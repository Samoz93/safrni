import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackCompComponent } from './snack-comp.component';

describe('SnackCompComponent', () => {
  let component: SnackCompComponent;
  let fixture: ComponentFixture<SnackCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnackCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SnackCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
