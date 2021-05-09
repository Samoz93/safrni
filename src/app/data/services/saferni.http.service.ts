import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { QueryStringParameters } from '../abstract/query.string.builder';
import { EndPoints, StaticInfo } from '../static/main-info';

@Injectable({ providedIn: 'root' })
export class SaferniHttp {
  constructor(private http: HttpClient) {}
  
  public get<T>(
    endpoint: EndPoints,
    query?: QueryStringParameters,
    options?: HttpHeaders
  ) {
    let urlBuilder = new UrlBuilder(
      StaticInfo.baseUrl,
      endpoint.toString(),
      query
    );
    return this.http.get<T>(urlBuilder.toString(), <Object>options);
  }
  public post(url: string, data: any, options?: any) {
    return this.http.post(url, data, options);
  }
  public put(url: string, data: any, options?: any) {
    return this.http.put(url, data, options);
  }
  public delete(url: string, options?: any) {
    return this.http.delete(url, options);
  }
}

class UrlBuilder {
  public url: string;
  public queryString: QueryStringParameters;
  constructor(
    private baseUrl: string,
    private action: string,
    queryString?: QueryStringParameters
  ) {
    this.url = [baseUrl, action].join('/');
    this.queryString = queryString || new QueryStringParameters();
  }
  public toString(): string {
    const qs: string = this.queryString ? this.queryString.toString() : '';
    return qs ? `${this.url}?${qs}` : this.url;
  }
}
