import { animation } from '@angular/animations';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions, BMCompleteLoopEvent } from 'ngx-lottie';
import { BehaviorSubject } from 'rxjs';
import { SplashScreenStateService } from 'src/app/data/services/splash-screen-state.service';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss'],
})
export class SplashComponent implements OnInit, AfterViewInit {
  opacityChange = 1;
  splashTransition = 'all 0.2s ease-out';

  showSplash = false;
  readonly ANIMATION_DURATION = 1;

  constructor(public splashScreenStateService: SplashScreenStateService) {}
  ngAfterViewInit(): void {
    this.splashScreenStateService.playing.subscribe((state) => {
      // console.log(state);
      if (state != this.showSplash) {
        if (state) {
          this.showSplash = true;
          console.log(state);
          // this.cdRef.detectChanges();
        } else {
          console.log('hiding');
          this.hideSplashAnimation();
        }
      }
    });
  }
  ngOnInit(): void {}
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

  private hideSplashAnimation() {
    this.splashTransition = `opacity ${this.ANIMATION_DURATION}s`;
    this.opacityChange = 0;
    setTimeout(() => {
      this.showSplash = false;
      // this.cdRef.detectChanges();
    }, 1000);
  }

  onLoopComplete(event: BMCompleteLoopEvent) {
    if (this.currentAnimationIndex + 1 >= this.animationFiles.length) {
      this.currentAnimationIndex = 0;
    } else this.currentAnimationIndex++;

    this.updateAnimationFile(this.animationFiles[this.currentAnimationIndex]);
  }
}
