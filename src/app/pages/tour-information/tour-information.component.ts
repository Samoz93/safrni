import { Component, OnInit } from '@angular/core';
import { JellyVectorItem } from 'src/app/common/widgets/jelly-vector/jelly-vector.component';

@Component({
  selector: 'app-tour-information',
  templateUrl: './tour-information.component.html',
  styleUrls: ['./tour-information.component.scss'],
})
export class TourInformationComponent implements OnInit {
  selectedTab =1;

  jellyVectors =  [
    new JellyVectorItem(
       25,60,'left'
     ), new JellyVectorItem(
       20,60,'right'
     ),
   ]

  constructor() {}

  ngOnInit(): void {}

  setTabIndex(index: number) {
    this.selectedTab = index;
  }

  styleObject(index: number) {
    return {
      display: index === this.selectedTab ? 'unset' : 'none',
      opacity: index === this.selectedTab ? 1 : 0,
    };
  }
}
