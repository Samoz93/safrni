import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionCitiesComponent } from './section-cities.component';

describe('SectionCitiesComponent', () => {
  let component: SectionCitiesComponent;
  let fixture: ComponentFixture<SectionCitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionCitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionCitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
