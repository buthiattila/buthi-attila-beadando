import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams, HttpContext} from '@angular/common/http';
import {Observable, catchError, throwError} from 'rxjs';

@Injectable({providedIn: 'root'})
export class HttpService {

  private http = inject(HttpClient);

  baseUrl: string = '';
  httpOptions: HttpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'}),
    observe: 'body',
    reportProgress: true,
    responseType: 'json',
    withCredentials: false
  };

  setBaseUrl(url: string): void {
    this.baseUrl = url;
  }

  getUrl(uri: string): string {
    return this.baseUrl + uri;
  }

  getLocalFile(path: string): Observable<any> {
    return this.http.get(this.baseUrl + path).pipe(
      catchError((err) => {
        return throwError(() => "HIBA: " + err);
      })
    );
  }

  getRequest(path: string, authNeeded: boolean, params?: any): Observable<any> {
    let options: HttpOptions = this.appendParams(params);

    return this.http.get(this.baseUrl + path, options).pipe(
      catchError((err) => {
        return throwError(() => "HIBA: " + err);
      })
    );
  }

  postRequest(path: string, dataToPost?: any, params?: any): Observable<any> {
    let options: HttpOptions = this.appendParams(params);

    return this.http.post(this.baseUrl + path, dataToPost, options).pipe(
      catchError((err) => {
        return throwError(() => "HIBA: " + err);
      })
    );
  }

  putRequest(path: string, dataToPost?: any, params?: any): Observable<any> {
    let options: HttpOptions = this.appendParams(params);

    return this.http.put(this.baseUrl + path, dataToPost, options).pipe(
      catchError((err) => {
        return throwError(() => "HIBA: " + err);
      })
    );
  }

  deleteRequest(path: string, params?: any): Observable<any> {
    let options: HttpOptions = this.appendParams(params);

    return this.http.delete(this.baseUrl + path, options).pipe(
      catchError((err) => {
        return throwError(() => "HIBA: " + err);
      })
    );
  }

  private appendParams(params?: any): HttpOptions {
    let options: HttpOptions = this.httpOptions;

    if (params) {
      let queryParams = new HttpParams();

      Object.keys(params).forEach(key => {
        queryParams = queryParams.append(key, params[key]);
      });

      options.params = queryParams;
    }

    return options;
  }

}

export interface HttpOptions {
  headers?: HttpHeaders | { [header: string]: string | string[] };
  context?: HttpContext,
  observe?: 'body'; //'body' | 'events' | 'response'
  params?: HttpParams | { [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean> },
  reportProgress?: boolean;
  responseType?: 'json'; // 'arraybuffer' | 'blob' | 'json' | 'text'
  withCredentials?: boolean;
}
