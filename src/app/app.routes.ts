
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {HomeComponent} from './components/home/home.component';
import {NgModule} from '@angular/core';
import {ClientsComponent} from './components/clients/clients.component';
import {LogoutComponent} from './components/logout/logout.component';

const routes: Routes = [
  {path: '', component: LoginComponent , pathMatch: 'full'},
  {path: 'login', component: LoginComponent , pathMatch: 'full'},
  {path: 'home', component: HomeComponent, pathMatch: 'full'},
  {path: 'client', component: ClientsComponent, pathMatch: 'full'},
  {path: 'logout', component: LogoutComponent, pathMatch: 'full'},
  { path: '**', redirectTo: ''}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}



/*export const appRoutingProviders: any[] = [
  AuthGuard
];*/

//export const appRoutes: any = RouterModule.forRoot(routes, { preloadingStrategy: NoPreloading });
