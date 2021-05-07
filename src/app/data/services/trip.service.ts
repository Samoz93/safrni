import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TripModel, TripModelAdapter } from '../models/TripModel';
import { EndPoints, StaticInfo } from '../static/main-info';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class TripService extends BaseService<TripModel> {
 
 
}
