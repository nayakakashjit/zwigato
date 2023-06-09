import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

const base_url = 'http://127.0.0.1:3000';
const options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
// const options = new Headers({
//   'Content-Type': 'application/json',
//   Authorization: `Bearer ${auth_token}`,
// });

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { };
  
  public get(url: string): Observable<any> {
    return this.http.get(`${base_url}/${url}`).pipe(map(res => res));
  }

  public post(url: string, body: object = {}): Observable<any> {
    console.log(url, body);
    
    return this.http
      .post(`${base_url}/${url}`, JSON.stringify(body), options)
      .pipe(catchError(this.formatErrors));
  }

  public formatErrors(error: any): Observable<any> {
    return throwError(error.error);
  }
}
