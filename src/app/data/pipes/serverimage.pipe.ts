import { ElementRef, Pipe, PipeTransform } from '@angular/core';
import { ImageModel } from '../models/ImageModel';
import { WindowService } from '../services/window.service';
import { StaticInfo } from '../static/main-info';
import { WINDOW_SIZE } from '../utils/enums';

@Pipe({
  name: 'serverimage',
})
export class ServerimagePipe implements PipeTransform {
  constructor(private windowService: WindowService, private el: ElementRef) {}
  transform(pr: ImageModel | undefined, isThumb: boolean = false): string {
    if (!pr) {
      return StaticInfo.defaultImage;
    } else {
      if (isThumb) return pr.formats?.thumbnail?.url ?? pr.url;
      switch (
        this.windowService.getWidthByElementWidth(
          this.el.nativeElement.offsetWidth
        )
      ) {
        case WINDOW_SIZE.medium:
          return pr.formats?.medium?.url ?? pr.url;
        case WINDOW_SIZE.small:
          return pr.formats?.small?.url ?? pr.url;
        case WINDOW_SIZE.thumb:
          return pr.formats?.small?.url ?? pr.url;
        default:
          return pr.url;
      }
    }
  }
}
