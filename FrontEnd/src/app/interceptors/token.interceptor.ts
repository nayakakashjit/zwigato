import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
public token: any = localStorage.getItem('token')
  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> { 
    const ifLoginUrl = request.url.includes('login');
    if (!ifLoginUrl) {
      // const x-access-token = `${this.token}`;
      request = request.clone({
        setHeaders : {
          'x-access-token': this.token
        }
      })
    }
    return next.handle(request);
  }
}
