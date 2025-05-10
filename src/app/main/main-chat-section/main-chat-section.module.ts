import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../../app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MainChatSectionComponent} from './main-chat-section.component';
import {ContextMenuComponent} from '../../shared/components/context-menu/context-menu.component';

@NgModule({
  declarations: [MainChatSectionComponent],
  exports: [MainChatSectionComponent],
  imports: [CommonModule, BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule, ContextMenuComponent],
})
export class MainChatSectionModule {}
