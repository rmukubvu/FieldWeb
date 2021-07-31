import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {getSelectedLanguage} from '../shared/translate';
import {LoginStatusChangeService} from './shared/auth/service/login-status-change.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'FieldWeb';
  isLoggedIn: boolean;

  constructor(private translate: TranslateService,
              private loginStatusChangeService: LoginStatusChangeService) {
    this.loginStatusChangeService.onStatusChange().subscribe( status => {
      console.log('login-status' + status);
      this.isLoggedIn = status;
    });
  }

  ngOnInit(): void {
    this.translate.addLangs(['en','af']);
    this.translate.setDefaultLang('en');
    this.translate.use(getSelectedLanguage(this.translate));
  }
}
