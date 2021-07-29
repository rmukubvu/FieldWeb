import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {getSelectedLanguage} from '../shared/translate';
import {now} from 'moment';
import {WorkflowFactory} from './factory/workflow/workflow.factory';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'FieldWeb';

  constructor(private translate: TranslateService,
              private router: Router) {
  }

  ngOnInit(): void {
    //
    // new WorkflowFactory().executeWorkFlow("approve").subscribe( result => {
    //   console.log('factory for approve returned', result);
    // });

    this.translate.addLangs(['en','af']);
    this.translate.setDefaultLang('en');
    this.translate.use(getSelectedLanguage(this.translate));
    this.router.navigate(['/login']);
  }
}
