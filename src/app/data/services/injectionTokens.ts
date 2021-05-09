import { InjectionToken } from '@angular/core';
import { Adapter } from '../adapters/adapter';
import { CityModel, CityModelAdapter } from '../models/CityModel';

export interface MyAdapter {
  class: Object;
  adapter: Object;
}
export const ADAPTERINEJCTION: MyAdapter = {
  class: CityModel,
  adapter: CityModelAdapter,
};

export const ADAPTER_CONFIG = new InjectionToken('app.config');
