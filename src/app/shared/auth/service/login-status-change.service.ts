import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {LocalStorageService} from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class LoginStatusChangeService {

  private isLoggedIn$ = new BehaviorSubject<boolean>(false);

  constructor(private localStorage: LocalStorageService) {
    if (this.localStorage.retrieve('authenticationToken') !== null) {
      this.isLoggedIn$.next(true);
    }
  }

  loggedInStatus(status: boolean){
    this.isLoggedIn$.next(status);
  }

  onStatusChange(): Observable<boolean> {
    return this.isLoggedIn$.asObservable();
  }
}
