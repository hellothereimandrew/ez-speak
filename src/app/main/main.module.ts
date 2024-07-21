import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app-routing.module';
import {CreateFolderComponent} from '../shared/components/create-folder/create-folder.component';
import {PopupComponent} from '../shared/components/popup/popup.component';
import {MainChatSectionComponent} from './main-chat-section/main-chat-section.component';
import {MainLeftbarAsideMenuComponent} from './main-leftbar/main-leftbar-aside-menu/main-leftbar-aside-menu.component';
import {MainLeftbarAsideNotifiComponent} from './main-leftbar/main-leftbar-aside-notifi/main-leftbar-aside-notifi.component';
import {MainLeftbarComponent} from './main-leftbar/main-leftbar.component';
import {MainLeftbarNavigationComponent} from './main-leftbar/main-leftbar-navigation/main-leftbar-navigation.component';
import {MainRightbarComponent} from './main-rightbar/main-rightbar.component';
import {MainComponent} from './main.component';
import {ContextMenuComponent} from 'src/app/shared/components/context-menu/context-menu.component';

@NgModule({
  declarations: [
    MainComponent,
    MainLeftbarComponent,
    MainLeftbarNavigationComponent,
    MainLeftbarAsideMenuComponent,
    MainLeftbarAsideNotifiComponent,
    MainChatSectionComponent,
    MainRightbarComponent,
    PopupComponent,
    CreateFolderComponent,
    ContextMenuComponent,
  ],
  imports: [CommonModule, BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule],
})
export class MainModule {}
