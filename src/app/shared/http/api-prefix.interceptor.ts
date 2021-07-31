import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable()
export class ApiPrefixInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.url.indexOf('assets') !== -1) {
       return next.handle(request);
    }
    request = request.clone({ url: environment.serverUrl + request.url });
    return next.handle(request);
  }
}
