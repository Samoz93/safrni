import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-read-only-stars',
  templateUrl: './read-only-stars.component.html',
  styleUrls: ['./read-only-stars.component.scss']
})
export class ReadOnlyStarsComponent implements OnInit {


  @Input() stars: number = 0;
  hasHalfStar: Boolean = false;
  filledStarsCount: number;
  unfilledStarsCount: number;

  constructor() {
    this.filledStarsCount = 0;
    this.unfilledStarsCount = 0;
  }

  ngOnInit(): void {
    console.log(this.stars);

    if (this.stars < 0) this.stars = 0;
    else if (this.stars > 5) this.stars = 5;

    if (this.stars % 1 == 0) {
      this.filledStarsCount = this.stars;
      this.unfilledStarsCount = 5 - this.filledStarsCount;
    }
    else if (this.stars % 1 > .85) {
      this.filledStarsCount = Math.round(this.stars);
      this.unfilledStarsCount = 5 - this.filledStarsCount;
    }
    else if (this.stars % 1 < .2) {
      this.filledStarsCount = Math.floor(this.stars);
      this.unfilledStarsCount = 5 - this.filledStarsCount;
    }
    else {
      this.filledStarsCount = Math.floor(this.stars);
      this.unfilledStarsCount = 5 - this.filledStarsCount - 1;
      this.hasHalfStar = true;
    }



  }
  round(value: number, step: number) {
    step || (step = 1.0);
    var inv = 1.0 / step;
    return Math.round(value * inv) / inv;
  }
}


