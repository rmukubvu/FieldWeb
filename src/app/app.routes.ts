
import {NoPreloading, RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './services/security/authn/auth-guard.service';
import {LoginComponent} from './components/login/login.component';
import {HomeComponent} from './components/home/home.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent}

];

export const appRoutingProviders: any[] = [
  AuthGuard
];

export const appRoutes: any = RouterModule.forRoot(routes, { preloadingStrategy: NoPreloading });
