import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ICONS } from 'src/app/data/utils/enums';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  form = new FormGroup({
    email: new FormControl('', [Validators.required]),
    fullName: new FormControl('', [Validators.required]),
    title: new FormControl(''),
    phone: new FormControl(''),
    birthDate: new FormControl(''),
    country: new FormControl(''),
  });
  icons = ICONS;

  constructor() {}

  ngOnInit(): void {}

  test() {
    console.log(this.form.value);
  }
}
