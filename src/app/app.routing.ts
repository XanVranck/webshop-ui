import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './component/login/login.component';
import {SignUpComponent} from './component/sign-up/sign-up.component';

const appRoutes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'sign-up', component: SignUpComponent}
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
