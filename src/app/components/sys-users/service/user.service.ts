import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LoginRequest, LoginResponse, SystemUser} from '../model/sys.user.model';
import {environment} from '../../../../environments/environment';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  allUserUrl: string = environment.serverUrl + 'auth/users';

  private users: SystemUser[] = [];

  constructor(private http: HttpClient) { }

  allUsers() : Observable<SystemUser[]> {
    return this.http.get<SystemUser[]>(this.allUserUrl).pipe(map((res: SystemUser[]) => {
      this.users = [...res];
      return res;
    }));
  }

}
