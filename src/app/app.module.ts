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


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
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
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
