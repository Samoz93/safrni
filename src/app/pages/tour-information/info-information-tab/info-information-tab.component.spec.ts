import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoInformationTabComponent } from './info-information-tab.component';

describe('InfoInformationTabComponent', () => {
  let component: InfoInformationTabComponent;
  let fixture: ComponentFixture<InfoInformationTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoInformationTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoInformationTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
