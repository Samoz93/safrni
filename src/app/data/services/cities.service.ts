import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DevData, EndPoints } from '../static/main-info';
import { environment } from 'src/environments/environment';
import { CityModel } from '../models/CityModel';

@Injectable({
  providedIn: 'root',
})
export class CitiesService  {
  constructor(protected http: HttpClient) {
   
  }
}
