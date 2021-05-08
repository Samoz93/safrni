import { Component, OnInit } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
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

  animationFiles: string[] = [
    '/src/assets/animation/airplane.json',
    '/src/assets/animation/luggage.json',
  ];

  options: AnimationOptions = {
    path: '/src/assets/animation/airplane.json',
  };

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

  toggle(): void {
    this.options = {
      ...this.options,
      path: '/assets/new-animation.json',
    };
  }

  ngOnInit(): void {
    this.splashScreenStateService.subscribe((res: any) => {
      this.hideSplashAnimation();
    });
  }

  private hideSplashAnimation() {
    this.splashTransition = `opacity ${this.ANIMATION_DURATION}s`;
    this.opacityChange = 0;
    setTimeout(() => {
      this.showSplash = !this.showSplash;
    }, 1000);
  }
}
