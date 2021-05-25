import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions, BMCompleteLoopEvent } from 'ngx-lottie';
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit {
  @Input() viewRef: TemplateRef<any>;
  @Input() loadingRef: TemplateRef<any>;
  @Input() noContentRef: TemplateRef<any>;

  @Input() isLoading = false;
  @Input() hasData = true;

  currentAnimationIndex = 0;
  animationFiles: string[] = [
    'assets/animation/airplane.json',
    'assets/animation/luggage.json',
    'assets/animation/car.json',
  ];

  options = new BehaviorSubject<AnimationOptions>({
    autoplay: false,
    loop: 1,
    path: this.animationFiles[this.currentAnimationIndex],
  });
  onLoopComplete(event: BMCompleteLoopEvent) {
    if (this.currentAnimationIndex + 1 >= this.animationFiles.length) {
      this.currentAnimationIndex = 0;
    } else this.currentAnimationIndex++;

    this.updateAnimationFile(this.animationFiles[this.currentAnimationIndex]);
  }
  updateAnimationFile(newPath: string): void {
    this.options.next({
      ...this.options.value,
      path: newPath,
    });
  }
  animationCreated(animationItem: AnimationItem): void {
    animationItem.setSpeed(2);
    animationItem.play();
  }

  constructor() {}

  ngOnInit(): void {}
}
