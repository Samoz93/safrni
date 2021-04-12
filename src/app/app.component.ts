import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fader, slider } from './route-animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    // <-- add your animations here
    // fader,
    slider,
    // transformer,
    // stepper
  ],
})
export class AppComponent {
  title = 'safrni';

  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animation']
    );
  }
}
