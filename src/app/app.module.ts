import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';


import { DashboardModule } from './dashboard/dashboard.module';
import { DashboardRoutingModule } from './dashboard/dashboard-routing.module';

import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { GrowlModule } from 'primeng/growl';
import { MessageModule } from 'primeng/message';

import { AUTHORIZATION_PROVIDER } from './services/auth.service';
import { LoggedInGuard } from './services/logged-in.guard';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    InputTextModule,
    MessageModule,
    PasswordModule,
    ButtonModule,
    AppRoutingModule,
    DashboardModule,
    DashboardRoutingModule
  ],
  providers: [
    AUTHORIZATION_PROVIDER,
    LoggedInGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
