import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-nocontent',
  templateUrl: './nocontent.component.html',
  styleUrls: ['./nocontent.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NocontentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
