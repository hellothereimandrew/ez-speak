import {NgModule} from '@angular/core';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AuthModule} from './auth/auth.module';
import {MainModule} from './main/main.module';
import {OptionsModule} from './options/options.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule, AuthModule, MainModule, OptionsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
