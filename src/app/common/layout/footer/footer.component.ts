import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { LocalService } from 'src/app/data/services/local.service';
import { NewsLetterService } from 'src/app/data/services/news-letter.service';
import { SnackService } from 'src/app/data/services/snack.service';
import { StaticInfo } from 'src/app/data/static/main-info';
import { ICONS, snackType } from 'src/app/data/utils/enums';

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
  constructor(
    private _snck: SnackService,
    private news: NewsLetterService,
    private loc: LocalService
  ) {}

  ngOnInit(): void {}

  submit() {
    this.ctrl?.markAsTouched();
    if (!this.ctrl.valid) return;
    //TODO send to database
    try {
      this.news.addEmailToNewsLetter(this.ctrl.value);
      this._snck.showSnack(this.loc.getTranslation('footer.thanks'));
    } catch (error) {
      this._snck.showSnack(
        this.loc.getTranslation('generalMessages.error'),
        snackType.error
      );
    }
  }
}
