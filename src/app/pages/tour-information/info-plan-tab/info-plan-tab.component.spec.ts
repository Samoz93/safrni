import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPlanTabComponent } from './info-plan-tab.component';

describe('InfoPlanTabComponent', () => {
  let component: InfoPlanTabComponent;
  let fixture: ComponentFixture<InfoPlanTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoPlanTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoPlanTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
