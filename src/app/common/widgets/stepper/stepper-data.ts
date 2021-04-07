export class StepperData {
  day: number;
  steps: StepItem[];
  constructor(day: number, steps: StepItem[]) {
    this.day = day;
    this.steps = steps;
  }
}
export class StepItem {
  time: string;
  title: string;
  image: string;
  description: string;

  constructor(time: string, title: string, image: string, description: string) {
    this.title = title;
    this.time = time;
    this.image = image;
    this.description = description;
  }
}
