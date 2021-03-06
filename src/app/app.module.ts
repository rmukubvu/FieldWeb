import { LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TranslateHttpLoader} from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule, TranslateService} from '@ngx-translate/core';
import { AppRoutingModule} from './app.routes';
import { CovalentLayoutModule } from '@covalent/core/layout';
import { CovalentStepsModule  } from '@covalent/core/steps';
import { CovalentHttpModule } from '@covalent/http';
import { CovalentHighlightModule } from '@covalent/highlight';
import { CovalentMarkdownModule } from '@covalent/markdown';
import { CovalentDynamicFormsModule } from '@covalent/dynamic-forms';
import { CovalentBaseEchartsModule } from '@covalent/echarts/base';
import {getSelectedLanguage} from '../shared/translate';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './components/common/material.module';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { SysUsersComponent } from './components/sys-users/sys-users.component';
import { ClientsComponent } from './components/clients/clients.component';
import {interceptorProviders} from './interceptor.providers';
import {NgxWebstorageModule} from 'ngx-webstorage';
import { LogoutComponent } from './components/logout/logout.component';
import { CreateClientComponent } from './components/clients/create-client/create-client.component';
import { ViewClientComponent } from './components/clients/view-client/view-client.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SysUsersComponent,
    ClientsComponent,
    LogoutComponent,
    CreateClientComponent,
    ViewClientComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    CovalentLayoutModule,
    NgxWebstorageModule.forRoot(),
    CovalentStepsModule,
    CovalentHttpModule.forRoot(),
    CovalentHighlightModule,
    CovalentMarkdownModule,
    CovalentDynamicFormsModule,
    CovalentBaseEchartsModule,
    MaterialModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([]),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    FormsModule
  ],
  providers: [
    {
      provide: LOCALE_ID, useFactory: getSelectedLanguage, deps: [TranslateService],
    },
    interceptorProviders,
  ],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
