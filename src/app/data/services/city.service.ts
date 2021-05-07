import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StaticInfo } from '../static/main-info';
import { environment } from 'src/environments/environment';
import { CityModel, CityModelAdapter } from '../models/CityModel';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BaseService } from '../services/base.service';

@Injectable({
  providedIn: 'root',
})
export class CityService extends BaseService<CityModel> {
  
}
