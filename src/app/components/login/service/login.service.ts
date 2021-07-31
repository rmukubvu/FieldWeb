import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LocalStorageService} from 'ngx-webstorage';
import {LoginRequestPayload} from '../../../shared/auth/model/auth.model';
import {Observable} from 'rxjs';
import {LoginResponse} from '../../sys-users/model/sys.user.model';
import {map} from 'rxjs/operators';
import {ServiceBase} from '../../../shared/http/ServiceBase';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends ServiceBase {

  //note that the full url is reconstructed in the api-prefix interceptor...
  //shared/http/api-prefix ...
  loginUrl: string = 'auth/login';

  constructor(http: HttpClient,
              private localStorage: LocalStorageService) {
    super(http);
  }

  login(loginRequestPayload: LoginRequestPayload): Observable<LoginResponse> {
    return this.post<LoginResponse>(this.loginUrl, loginRequestPayload)
      .pipe(map(data => {
        if (!data.isError) {
          this.localStorage.store('authenticationToken', data.authenticationToken);
          this.localStorage.store('username', data.username);
          this.localStorage.store('refreshToken', data.refreshToken);
          this.localStorage.store('expiresAt', data.expiresAt);
        }
        return data;
      }));
  }
}
