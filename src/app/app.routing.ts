import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './component/login/login.component';
import {SignUpComponent} from './component/sign-up/sign-up.component';
import {ProductOverviewComponent} from './component/product-overview/product-overview.component';

const appRoutes: Routes = [
  {path: '', redirectTo: 'product-overview', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'product-overview', component: ProductOverviewComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
