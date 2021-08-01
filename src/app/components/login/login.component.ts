import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {LoginRequestPayload} from '../../shared/auth/model/auth.model';
import {LoginService} from './service/login.service';
import {LoginStatusChangeService} from '../../shared/auth/service/login-status-change.service';

@Component({
  selector: 'field-eye-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide = true;
  loginForm: FormGroup;
  showSpinner: boolean = false;
  errorMessage: string;
  loginRequestPayLoad: LoginRequestPayload;

  constructor(private formBuilder: FormBuilder,
              private loginService: LoginService,
              private loginStatusChangeService: LoginStatusChangeService,
              private router: Router) {

    this.loginRequestPayLoad = {
      username: '',
      password: ''
    };

  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login = () => {

    this.showSpinner = true;
    this.loginRequestPayLoad.username = this.f.username.value;
    this.loginRequestPayLoad.password = this.f.password.value;

    this.loginService.login(this.loginRequestPayLoad).subscribe((response) => {
        if (!response.isError) {
          this.loginStatusChangeService.loggedInStatus(true);
          this.router.navigate(['/home']);
        } else {
          this.errorMessage = "invalid username/password combination";
        }
      },
      (error) => {
        this.errorMessage = error.message;
        this.showSpinner = false;
      },
      () => {
        this.showSpinner = false;
      }
    );
  }

  get f() {
    return this.loginForm.controls;
  }

}
