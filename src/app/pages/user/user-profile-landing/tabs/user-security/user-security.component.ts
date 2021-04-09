import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ICONS } from 'src/app/data/uitls/enums';

@Component({
  selector: 'app-user-security',
  templateUrl: './user-security.component.html',
  styleUrls: ['./user-security.component.scss'],
})
export class UserSecurityComponent implements OnInit {
  form: FormGroup = new FormGroup({
    oldPass: new FormControl('', Validators.required),
    newPass: new FormControl('', Validators.required),
    confirmNewPass: new FormControl('', [Validators.required]),
  });
  constructor() {}
  icons = ICONS;

  ngOnInit(): void {}

  onSubmit() {
    if (this.form.invalid) return;
    console.log(this.form.value);
  }
}
