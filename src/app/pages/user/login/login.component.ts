import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { LoginEnum } from 'src/app/data/uitls/enums';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  type = LoginEnum.login;
  enum = LoginEnum;
  form: FormGroup = new FormGroup({});
  constructor() {
    console.log('constructor');

    this._initForm();
  }
  ngOnInit(): void {
    console.log('init');
  }

  _initForm() {
    if (this.type == LoginEnum.signup) {
      this.form = new FormGroup({
        firstName: new FormControl('', [
          Validators.minLength(3),
          Validators.required,
        ]),
        lastName: new FormControl('', [
          Validators.minLength(3),
          Validators.required,
        ]),
        email: new FormControl('', [Validators.email, Validators.required]),
        password: new FormControl('', Validators.required),
        accept: new FormControl(true, [Validators.requiredTrue]),
      });
    } else {
      this.form = new FormGroup({
        email: new FormControl('', [Validators.email, Validators.required]),
        password: new FormControl('', Validators.required),
      });
    }
    // this._initControls();
  }
  // controls: { name: string; control: FormControl }[] = [];
  // get ctrl() {
  //   return this.controls.map((e) => e.name);
  // }
  submitForm() {
    if (!this.form.valid) return;
    //TODO submit form based on the type of the page
    console.log(this.form.value);
  }
  getError(ctrlName: string) {
    const lst: string[] = [];
    const ctrl = this.form.controls[ctrlName] as FormControl;
    for (const key in ctrl.errors) {
      switch (key) {
        case 'email':
          lst.push('Please provide a valid Email');
          break;
        default:
          if (ctrlName == 'accept') {
            lst.push('Please please Accept our Privacy Policy');
          } else {
            lst.push('Please provide a value');
          }
          break;
      }
    }
    return lst;
  }

  hasError(ctrlName: string): boolean {
    const val = this.getError(ctrlName).length > 0;
    return val;
  }
  // _initControls(): { name: string; control: FormControl }[] {
  //   console.log('called');
  //   for (const ctrl in this.form?.controls) {
  //     this.controls.push({
  //       name: ctrl,
  //       control: this.form?.controls[ctrl] as FormControl,
  //     });
  //   }
  //   return this.controls;
  // }

  switchToTerm() {
    this.type = LoginEnum.privacy;
  }
  switchToLogin() {
    this.type = LoginEnum.login;
    this._initForm();
  }
  switchToSignUp() {
    this.type = LoginEnum.signup;
    this._initForm();
  }
}
