import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketCounterComponent } from './ticket-counter.component';

describe('TicketCounterComponent', () => {
  let component: TicketCounterComponent;
  let fixture: ComponentFixture<TicketCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketCounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
