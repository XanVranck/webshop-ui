import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {routing} from './app.routing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatSidenavModule,
  MatToolbarModule,
  MatGridListModule,
  MatInputModule,
  MatSelectModule,
  MatSlideToggleModule,
  MatFormFieldModule
} from '@angular/material';
import 'hammerjs';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {AppComponent} from './app.component';
import {LoginComponent} from './component/login/login.component';
import { LoginService } from './service/login/login.service';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import {SignUpService} from './service/sign-up/sign-up.service';
import { ProductOverviewComponent } from './component/product-overview/product-overview.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { LogOutService } from './service/log-out/log-out.service';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';
import { ProductOverviewService } from './service/product-overview/product-overview.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    ProductOverviewComponent,
    NavBarComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    routing,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule,
    MatGridListModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatFormFieldModule
  ],
  providers: [
    LoginService,
    SignUpService,
    LoginComponent,
    NavBarComponent,
    LogOutService,
    ProductOverviewService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
