import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { SnackService } from 'src/app/data/services/snack.service';
import { StaticInfo } from 'src/app/data/static/main-info';
import { ICONS } from 'src/app/data/utils/enums';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  projectName = StaticInfo.projectName;
  phone = StaticInfo.phoneNumber;
  email = StaticInfo.email;
  icons = ICONS;
  ctrl = new FormControl(null, [Validators.email, Validators.required]);
  constructor(private _snck: SnackService) {}

  ngOnInit(): void {}

  submit() {
    this.ctrl?.markAsTouched();
    if (!this.ctrl.valid) return;
    //TODO send to database
    this._snck.showSnack('Done!!');
  }
}
