import { Directive, HostListener, Input } from '@angular/core';
import { StaticInfo } from '../static/main-info';

@Directive({
  selector: '[socialLink]',
})
export class SocialLinkDirective {
  @Input() type: string;
  @Input() message: string = 'hello';
  constructor() {}

  @HostListener('click')
  onClick() {
    switch (this.type) {
      case 'whatsapp':
        window.open(
          `https://wa.me/${StaticInfo.phoneNumber
            .split(' ')
            .join('')
            .replace('+', '')}?text=${this.message}`
        );

        break;
      case 'email':
        window.open(`mailto:${StaticInfo.email}+?body=${this.message}`);
        break;
      default:
        break;
    }
  }
}

export enum socialLinkType {
  whatsApp,
  facebook,
  instagram,
  email,
  phone,
}
