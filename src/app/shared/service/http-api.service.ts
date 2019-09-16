import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable ,  throwError } from 'rxjs';
//import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';

import { catchError } from 'rxjs/operators';

@Injectable()
export class HttpApiService {

    urlPath: string = environment.production ? 'https://service.traffilizer.com' : 'http://localhost:49696';
  
  constructor(
    private http: HttpClient, private router: Router
  ) {}

  private formatErrors(error: any) {
    return  throwError(error.error);
  }

  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(`${this.urlPath}${path}`, { params })
      .pipe(catchError(this.formatErrors));
  }

  put(path: string, body: Object = {}): Observable<any> {
    return this.http.put(
      `${this.urlPath}${path}`,
      JSON.stringify(body)
    ).pipe(catchError(this.formatErrors));
  }

  // anonymousPost(url: string, data: any): Observable<any> {
  //   let headers = new Headers({ 'Content-Type': 'application/json' });
  //   let options = new RequestOptions({ headers: headers });
  //   return this._http.post(this.urlPath + url, data, options)
  //     .map(this.HandleMapObservable)
  //     .catch((error: Response) => this.handleErrorObservable(error, this.router));
  // }

  post(path: string, body: Object = {}): Observable<any> {
    let headers = new Headers({
        'Content-Type': 'application/json;charset=utf-8',
        'Authorization': 'Bearer ' + localStorage.getItem('userToken')
      });
    return this.http.post(
      `${this.urlPath}${path}`,
      body
    ).pipe(catchError(this.formatErrors));
  }

  delete(path): Observable<any> {
    return this.http.delete(
      `${this.urlPath}${path}`
    ).pipe(catchError(this.formatErrors));
  }

  //by farrukh to add
  private HandleMapObservable(response: Response | any) {
    if (response.text()) {
      return response.json();
    }
  }

  private handleErrorObservable(error: Response | any, router: Router) {
    if (error.statusText == 'Unauthorized') {
      router.navigate(["/signin"]);
    }
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }
}