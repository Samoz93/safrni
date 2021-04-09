import { Component, OnInit } from '@angular/core';
import {
  StepItem,
  StepperData,
} from 'src/app/common/widgets/stepper/stepper-data';

@Component({
  selector: 'app-info-plan-tab',
  templateUrl: './info-plan-tab.component.html',
  styleUrls: ['./info-plan-tab.component.scss'],
})
export class InfoPlanTabComponent implements OnInit {
  steps = [
    new StepperData(1, [
      new StepItem(
        '7:00 AM',
        'Free Touring Day in Istanbul',
        'https://picsum.photos/id/119/1080/720',
        "Sultan Ahmed Mosque, also known as the Blue Mosque, is an Ottoman-era friday mosque located in Istanbul, Turkey. A functioning mosque, it also attracts large numbers of tourist visitors. It was constructed between 1609 and 1616 during the rule of Ahmed I. Its Külliye contains Ahmed's tomb."
      ),
    ]),
    new StepperData(2, [
      new StepItem(
        '7:00 AM',
        'Free Touring Day in Istanbul',
        'https://picsum.photos/id/129/1080/720',
        "Sultan Ahmed Mosque, also known as the Blue Mosque, is an Ottoman-era friday mosque located in Istanbul, Turkey. A functioning mosque, it also attracts large numbers of tourist visitors. It was constructed between 1609 and 1616 during the rule of Ahmed I. Its Külliye contains Ahmed's tomb."
      ),
    ]),
    new StepperData(3, [
      new StepItem(
        '7:00 AM',
        'Free Touring Day in Istanbul',
        'https://picsum.photos/id/319/1080/720',
        "Sultan Ahmed Mosque, also known as the Blue Mosque, is an Ottoman-era friday mosque located in Istanbul, Turkey. A functioning mosque, it also attracts large numbers of tourist visitors. It was constructed between 1609 and 1616 during the rule of Ahmed I. Its Külliye contains Ahmed's tomb."
      ),
      new StepItem(
        '8:00 AM',
        'Free Touring Day in Istanbul',
        'https://picsum.photos/id/111/1080/720',
        "Sultan Ahmed Mosque, also known as the Blue Mosque, is an Ottoman-era friday mosque located in Istanbul, Turkey. A functioning mosque, it also attracts large numbers of tourist visitors. It was constructed between 1609 and 1616 during the rule of Ahmed I. Its Külliye contains Ahmed's tomb."
      ),
      new StepItem(
        '9:00 AM',
        'Free Touring Day in Istanbul',
        'https://picsum.photos/id/619/1080/720',
        "Sultan Ahmed Mosque, also known as the Blue Mosque, is an Ottoman-era friday mosque located in Istanbul, Turkey. A functioning mosque, it also attracts large numbers of tourist visitors. It was constructed between 1609 and 1616 during the rule of Ahmed I. Its Külliye contains Ahmed's tomb."
      ),
    ]),
    new StepperData(2, [
      new StepItem(
        '7:00 AM',
        'Free Touring Day in Istanbul',
        'https://picsum.photos/id/129/1080/720',
        "Sultan Ahmed Mosque, also known as the Blue Mosque, is an Ottoman-era friday mosque located in Istanbul, Turkey. A functioning mosque, it also attracts large numbers of tourist visitors. It was constructed between 1609 and 1616 during the rule of Ahmed I. Its Külliye contains Ahmed's tomb."
      ),
    ]),
    new StepperData(2, [
      new StepItem(
        '7:00 AM',
        'Free Touring Day in Istanbul',
        'https://picsum.photos/id/129/1080/720',
        "Sultan Ahmed Mosque, also known as the Blue Mosque, is an Ottoman-era friday mosque located in Istanbul, Turkey. A functioning mosque, it also attracts large numbers of tourist visitors. It was constructed between 1609 and 1616 during the rule of Ahmed I. Its Külliye contains Ahmed's tomb."
      ),
    ]),
    new StepperData(2, [
      new StepItem(
        '7:00 AM',
        'Free Touring Day in Istanbul',
        'https://picsum.photos/id/129/1080/720',
        "Sultan Ahmed Mosque, also known as the Blue Mosque, is an Ottoman-era friday mosque located in Istanbul, Turkey. A functioning mosque, it also attracts large numbers of tourist visitors. It was constructed between 1609 and 1616 during the rule of Ahmed I. Its Külliye contains Ahmed's tomb."
      ),
    ]),
    new StepperData(2, [
      new StepItem(
        '7:00 AM',
        'Free Touring Day in Istanbul',
        'https://picsum.photos/id/129/1080/720',
        "Sultan Ahmed Mosque, also known as the Blue Mosque, is an Ottoman-era friday mosque located in Istanbul, Turkey. A functioning mosque, it also attracts large numbers of tourist visitors. It was constructed between 1609 and 1616 during the rule of Ahmed I. Its Külliye contains Ahmed's tomb."
      ),
    ]),
    new StepperData(2, [
      new StepItem(
        '7:00 AM',
        'Free Touring Day in Istanbul',
        'https://picsum.photos/id/129/1080/720',
        "Sultan Ahmed Mosque, also known as the Blue Mosque, is an Ottoman-era friday mosque located in Istanbul, Turkey. A functioning mosque, it also attracts large numbers of tourist visitors. It was constructed between 1609 and 1616 during the rule of Ahmed I. Its Külliye contains Ahmed's tomb."
      ),
    ]),
    new StepperData(2, [
      new StepItem(
        '7:00 AM',
        'Free Touring Day in Istanbul',
        'https://picsum.photos/id/129/1080/720',
        "Sultan Ahmed Mosque, also known as the Blue Mosque, is an Ottoman-era friday mosque located in Istanbul, Turkey. A functioning mosque, it also attracts large numbers of tourist visitors. It was constructed between 1609 and 1616 during the rule of Ahmed I. Its Külliye contains Ahmed's tomb."
      ),
    ]),
    new StepperData(2, [
      new StepItem(
        '7:00 AM',
        'Free Touring Day in Istanbul',
        'https://picsum.photos/id/129/1080/720',
        "Sultan Ahmed Mosque, also known as the Blue Mosque, is an Ottoman-era friday mosque located in Istanbul, Turkey. A functioning mosque, it also attracts large numbers of tourist visitors. It was constructed between 1609 and 1616 during the rule of Ahmed I. Its Külliye contains Ahmed's tomb."
      ),
    ]),
  ];
  constructor() {}

  ngOnInit(): void {}
}
