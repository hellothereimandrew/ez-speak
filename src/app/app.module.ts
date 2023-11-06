import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { AuthSignUpPassRemindComponent } from './auth/auth-sign-up/auth-sign-up-pass-remind/auth-sign-up-pass-remind.component';
import { MainComponent } from './main/main.component';
import { MainLeftbarComponent } from './main/main-leftbar/main-leftbar.component';
import { MainLeftbarAsideNotifiComponent } from './main/main-leftbar/main-leftbar-aside-notifi/main-leftbar-aside-notifi.component';
import { MainChatSectionComponent } from './main/main-chat-section/main-chat-section.component';
import { MainRightbarComponent } from './main/main-rightbar/main-rightbar.component';
import { AuthSignInComponent } from './auth/auth-sign-in/auth-sign-in.component';
import { AuthSignUpComponent } from './auth/auth-sign-up/auth-sign-up.component';
import { OptionsComponent } from './options/options.component';
import { OptionsLeftbarComponent } from './options/options-leftbar/options-leftbar.component';
import { OptionsRightbarComponent } from './options/options-rightbar/options-rightbar.component';
import { MainLeftbarAsideMenuComponent } from './main/main-leftbar/main-leftbar-aside-menu/main-leftbar-aside-menu.component';
import { AuthSignInPassRemindComponent } from './auth/auth-sign-in/auth-sign-in-pass-remind/auth-sign-in-pass-remind.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    AuthSignInComponent,
    AuthSignUpComponent,
    AuthSignUpPassRemindComponent,
    MainComponent,
    MainLeftbarComponent,
    MainLeftbarAsideNotifiComponent,
    MainChatSectionComponent,
    MainRightbarComponent,
    OptionsComponent,
    OptionsLeftbarComponent,
    OptionsRightbarComponent,
    MainLeftbarAsideMenuComponent,
    AuthSignInPassRemindComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
