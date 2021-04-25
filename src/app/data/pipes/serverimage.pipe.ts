import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';
import urljoin from 'url-join';
import { PreviewImage } from '../models/TripModel';
import { DevData } from '../static/main-info';

@Pipe({
  name: 'serverimage',
})
export class ServerimagePipe implements PipeTransform {
  //TODO resposive image here
  transform(pr: PreviewImage | undefined): string {
    if (!environment.production) return pr?.url!;
    if (pr) return urljoin(DevData.baseUrl, pr.url);
    return '';
  }
}
