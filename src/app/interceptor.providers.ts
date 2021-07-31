import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {ApiPrefixInterceptor} from './shared/http/api-prefix.interceptor';
import {AuthInterceptor} from './shared/http/auth.interceptor';

export const interceptorProviders =
  [
    { provide: HTTP_INTERCEPTORS, useClass: ApiPrefixInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ];
