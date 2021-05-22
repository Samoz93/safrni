import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalService } from 'src/app/data/services/local.service';

@Component({
  selector: 'logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
})
export class LogoComponent implements OnInit {
  constructor(private localeService: LocalService, private router: Router) {}

  ngOnInit(): void {}
  logo(): string {
    if (this.localeService.locale == 'ar')
      return '../../../../assets/images/png/arabic-logo.png';
    else return '../../../../assets/images/png/english-logo.png';
  }
  onLogoClick() {
    this.router.navigate(['/']);
  }
}
