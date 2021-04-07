import { Component, Input, OnInit } from '@angular/core';
import { StepperData } from './stepper-data';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
})
export class StepperComponent implements OnInit {
  @Input() stepperData: StepperData[];

  ngOnInit(): void {}
}
