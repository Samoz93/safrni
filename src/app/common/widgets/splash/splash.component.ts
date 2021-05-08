import { animation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions, BMCompleteLoopEvent } from 'ngx-lottie';
import { BehaviorSubject } from 'rxjs';
import { SplashScreenStateService } from 'src/app/data/services/splash-screen-state.service';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss'],
})
export class SplashComponent implements OnInit {
  // The screen starts with the maximum opacity
  public opacityChange = 1;
  public splashTransition = 'all 0.2s ease-out';
  // First access the splash is visible
  public showSplash = true;
  readonly ANIMATION_DURATION = 1;

  constructor(private splashScreenStateService: SplashScreenStateService) {}

  currentAnimationIndex = 0;

  animationFiles: string[] = [
    '../../../../assets/animation/airplane.json',
    '../../../../assets/animation/luggage.json',
    '../../../../assets/animation/car.json',
  ];

  options = new BehaviorSubject<AnimationOptions>({
    autoplay: false,
    loop: 1,
    path: this.animationFiles[this.currentAnimationIndex],
  });

  animationCreated(animationItem: AnimationItem): void {
    animationItem.setSpeed(2);
    animationItem.play();
  }

  updateAnimationFile(newPath: string): void {
    this.options.next({
      ...this.options.value,
      path: newPath,
    });
  }

  ngOnInit(): void {
    this.splashScreenStateService.subscribe((res: any) => {
      this.hideSplashAnimation();
    });
    this.options.subscribe((v) => console.log(v));
  }

  private hideSplashAnimation() {
    this.splashTransition = `opacity ${this.ANIMATION_DURATION}s`;
    this.opacityChange = 0;
    setTimeout(() => {
      this.showSplash = !this.showSplash;
    }, 1000);
  }

  onLoopComplete(event: BMCompleteLoopEvent) {
    if (this.currentAnimationIndex + 1 >= this.animationFiles.length) {
      this.currentAnimationIndex = 0;
    } else this.currentAnimationIndex++;

    this.updateAnimationFile(this.animationFiles[this.currentAnimationIndex]);
  }
}
