export class StepperData {
  day: number;
  steps: StepItem[];
  constructor(day: number, steps: StepItem[]) {
    this.day = day;
    this.steps = steps;
  }
}
export class StepItem {
  constructor(
    public time: string,
    public title: string,
    public image: string,
    public description: string
  ) {}
}
