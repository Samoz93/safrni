import { Component, Input } from '@angular/core';
import { ICONS } from '../uitls/enums';
@Component({
  template: '',
})
export class MyControlAbstract {
  @Input() icon: ICONS = ICONS.profile;

  isfocused = false;
  onFocus(e: any) {
    this.isfocused = true;
  }

  onFocusOut() {
    this.isfocused = false;
  }

  errMsgs = [
    {
      name: 'required',
      msg: 'this field is required',
    },
  ];
}
