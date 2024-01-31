import {NgModule} from '@angular/core';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DecorationService} from './shared/services/decoration.service';
import {AuthModule} from './auth/auth.module';
import {MainModule} from './main/main.module';
import {OptionsModule} from './options/options.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule, AuthModule, MainModule, OptionsModule],
  providers: [DecorationService],
  bootstrap: [AppComponent],
})
export class AppModule {}
