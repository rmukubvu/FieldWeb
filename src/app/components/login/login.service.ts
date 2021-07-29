import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {User} from './model/user.models';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  validateLogin(username: string,password: string): Observable<User>  {
    return this.httpClient.get<User>(this.getUrl(username,password));
  }

  private getUrl(username: string,password: string) {
    return environment.baseUrl + 'user/validate/' + username + '/' + password;
  }
}
