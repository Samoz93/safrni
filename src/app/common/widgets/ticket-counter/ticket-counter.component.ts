import { Component, forwardRef, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ControlValueAccessorConnector } from 'src/app/data/abstract/control-value-accessor-connector';
import { ICONS } from 'src/app/data/utils/enums';

@Component({
  selector: 'app-ticket-counter',
  templateUrl: './ticket-counter.component.html',
  styleUrls: ['./ticket-counter.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TicketCounterComponent),
      multi: true,
    },
  ],
})
export class TicketCounterComponent
  extends ControlValueAccessorConnector
  implements OnInit
{
  hover = false;
  ngOnInit(): void {
    this.icon = ICONS.ticket;
  }
  onHover() {
    this.hover = true;
  }
  onOut() {
    this.hover = false;
  }
  checkVal() {
    const val = this.control?.value ?? null;
    if (!val || isNaN(val)) {
      this.control.setValue(0);
    }
  }
  add() {
    this.checkVal();
    const old = +this.control.value;

    this.control.setValue(old + 1);
  }
  sub() {
    this.checkVal();
    const old = +this.control.value;
    this.control.setValue(old - 1 < 0 ? 0 : old - 1);
  }
}
