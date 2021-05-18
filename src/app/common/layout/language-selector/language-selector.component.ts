import { Component, OnInit } from '@angular/core';
import { LocalService } from 'src/app/data/services/local.service';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss']
})
export class LanguageSelectorComponent implements OnInit {

  constructor(public localService : LocalService){}

  ngOnInit(): void {
  }

}
