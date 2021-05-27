import { Directive, HostListener, Input } from '@angular/core';
import { StaticInfo } from '../static/main-info';

@Directive({
  selector: '[socialLink]',
})
export class SocialLinkDirective {
  @Input() type: string;
  @Input() message: string = 'hello';
  @Input() account: string = '';
  constructor() {}

  @HostListener('click')
  onClick() {
    console.log('clicked', this.type);

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
      case 'instagram':
        window.open(`https://www.instagram.com/${this.account}`);
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/${this.account}`);
        break;
      case 'twitter':
        window.open(`https://www.twitter.com/${this.account}`);
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
  twitter,
}
