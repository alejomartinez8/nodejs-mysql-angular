import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AdvisersComponent } from './advisers/advisers.component';
import { FormAdviserComponent } from './formadviser/formadviser.component';
import { LoginComponent } from './login/login.component';

import { authInterceptorProviders } from './_helpers/auth.interceptor';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdvisersComponent,
    FormAdviserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
