import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-trip-card',
  templateUrl: './single-trip-card.component.html',
  styleUrls: ['./single-trip-card.component.scss'],
})
export class SingleTripCardComponent implements OnInit {
  @Input() txt: string = 'Istanbul';
  @Input() img: string = '/assets/images/placeholder/istanbul.jpg';
  @Input() duration: string = '1';
  @Input() price: string = '40$';
  @Input() isSingleTrip = true;
  @Input() width: string = '50rem';
  @Input() height: string = '30rem';
  constructor(private router: Router, private activeRoute: ActivatedRoute) {}

  ngOnInit(): void {}

  goToOffer() {
    this.router.navigate(['/offers']);
  }
}
