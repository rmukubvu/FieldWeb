import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../shared/auth/service/auth.service';
import {LoginStatusChangeService} from '../../shared/auth/service/login-status-change.service';

@Component({
  selector: 'field-eye-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.auth.logout();
  }

}
