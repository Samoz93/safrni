import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { LocalService } from './data/services/local.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
 
  constructor(locale: LocalService) {
 
  }
  ngOnInit(): void {}
}
