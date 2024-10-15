import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app-routing.module';

import {AuthPassRemindComponent} from './auth-pass-remind/auth-pass-remind.component';
import {AuthSignInComponent} from './auth-sign-in/auth-sign-in.component';
import {AuthSignUpComponent} from './auth-sign-up/auth-sign-up.component';
import {AuthComponent} from './auth.component';

@NgModule({
  declarations: [AuthComponent, AuthSignInComponent, AuthSignUpComponent, AuthPassRemindComponent],
  imports: [CommonModule, BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule],
})
export class AuthModule {}
