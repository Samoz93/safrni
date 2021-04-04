import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileinputComponent } from './profileinput.component';

describe('ProfileinputComponent', () => {
  let component: ProfileinputComponent;
  let fixture: ComponentFixture<ProfileinputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileinputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
