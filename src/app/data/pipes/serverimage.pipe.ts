import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';
import urljoin from 'url-join';
import { ImageModel } from '../models/ImageModel';
import { DevData } from '../static/main-info';

@Pipe({
  name: 'serverimage',
})
export class ServerimagePipe implements PipeTransform {
  //TODO resposive image here
  transform(pr: ImageModel | undefined): string {
    if (DevData.isDev && !environment.production) return pr?.url!;

    if (pr) {
      const url = urljoin(DevData.baseUrl, pr.url!);

      return url;
    }
    return '';
  }
}
