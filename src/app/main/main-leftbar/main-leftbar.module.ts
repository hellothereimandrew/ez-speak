import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainLeftbarComponent} from './main-leftbar.component';
import {MainLeftbarNavigationComponent} from './main-leftbar-navigation/main-leftbar-navigation.component';
import {MainLeftbarAsideMenuComponent} from './main-leftbar-aside-menu/main-leftbar-aside-menu.component';
import {MainLeftbarAsideNotifiComponent} from './main-leftbar-aside-notifi/main-leftbar-aside-notifi.component';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../../app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CreateFolderComponent} from '../../shared/components/create-folder/create-folder.component';
import {ContextMenuComponent} from '../../shared/components/context-menu/context-menu.component';
import {PopupComponent} from '../../shared/components/popup/popup.component';

@NgModule({
  declarations: [
    MainLeftbarComponent,
    MainLeftbarNavigationComponent,
    MainLeftbarAsideMenuComponent,
    MainLeftbarAsideNotifiComponent,
    CreateFolderComponent,
  ],
  exports: [
    MainLeftbarComponent,
    MainLeftbarNavigationComponent,
    MainLeftbarAsideMenuComponent,
    MainLeftbarAsideNotifiComponent,
    CreateFolderComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ContextMenuComponent,
    PopupComponent,
  ],
})
export class MainLeftbarModule {}
