import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app-routing.module';
import {MainComponent} from './main.component';
import {MainRightbarService} from './main-rightbar/main-rightbar.service';
import {MainLeftbarModule} from './main-leftbar/main-leftbar.module';
import {MainChatSectionModule} from './main-chat-section/main-chat-section.module';
import {MainService} from './main.service';
import {MainRightbarModule} from './main-rightbar/main-rightbar.module';
import {DecorationService} from '../shared/services/decoration.service';
import {StateService} from '../shared/services/state.service';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MainLeftbarModule,
    MainChatSectionModule,
    MainRightbarModule,
  ],
  exports: [],
  providers: [StateService, DecorationService, MainService, MainRightbarService],
})
export class MainModule {}
