import { Pipe, PipeTransform } from '@angular/core';
import urljoin from 'url-join';
import { PreviewImage } from '../models/TripModel';
import { DevData } from '../static/main-info';

@Pipe({
  name: 'serverimage',
})
export class ServerimagePipe implements PipeTransform {
  //TODO resposive image here
  transform(value: PreviewImage | undefined): string {
    if (value) return urljoin(DevData.baseUrl, value.url);
    return '';
  }
}
