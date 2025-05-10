import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainRightbarComponent} from './main-rightbar.component';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../../app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [MainRightbarComponent],
  exports: [MainRightbarComponent],
  imports: [CommonModule, BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule],
})
export class MainRightbarModule {}
