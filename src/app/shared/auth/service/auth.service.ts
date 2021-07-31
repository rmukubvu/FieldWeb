import {EventEmitter, Injectable, Output} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LocalStorageService} from 'ngx-webstorage';
import {Observable, throwError} from 'rxjs';
import {LoginResponse} from '../../../components/sys-users/model/sys.user.model';
import {RegisterRequestPayload} from '../model/auth.model';
import {tap} from 'rxjs/operators';
import {Router} from '@angular/router';
import {ServiceBase} from '../../http/ServiceBase';
import {LoginStatusChangeService} from './login-status-change.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends ServiceBase {

  private registerUrl: string =  'auth/register';
  private refreshTokenUrl: string =  'auth/refresh/token';
  private logoutUrl: string = 'auth/logout';

  private refreshTokenPayload = {
    refreshToken: this.getRefreshToken(),
    username: this.getUserName()
  }

  constructor(http: HttpClient,
              private localStorage: LocalStorageService,
              private loginStatusChangeService: LoginStatusChangeService,
              private router: Router) {
    super(http);
  }

  register(registerRequestPayload: RegisterRequestPayload): Observable<any> {
    return this.postOf(this.registerUrl, registerRequestPayload);
  }

  getJwtToken() {
    return this.localStorage.retrieve('authenticationToken');
  }

  refreshToken() {
    return this.post<LoginResponse>(this.refreshTokenUrl,
      this.refreshTokenPayload)
      .pipe(tap(response => {
        this.localStorage.clear('authenticationToken');
        this.localStorage.clear('expiresAt');

        this.localStorage.store('authenticationToken',
          response.authenticationToken);
        this.localStorage.store('expiresAt', response.expiresAt);
      }));
  }

  logout() {
    this.postOf(this.logoutUrl, this.refreshTokenPayload)
      .subscribe(data => {
        this.localStorage.clear('authenticationToken');
        this.localStorage.clear('username');
        this.localStorage.clear('refreshToken');
        this.localStorage.clear('expiresAt');
        this.loginStatusChangeService.loggedInStatus(false);
        this.router.navigate(['/login']);
      }, error => {
        throwError(error);
      })

  }

  getUserName() {
    return this.localStorage.retrieve('username');
  }

  getRefreshToken() {
    return this.localStorage.retrieve('refreshToken');
  }

}
