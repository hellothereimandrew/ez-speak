import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app-routing.module';
import {OptionsLeftbarComponent} from './options-leftbar/options-leftbar.component';
import {OptionsRightbarComponent} from './options-rightbar/options-rightbar.component';
import {OptionsComponent} from './options.component';

@NgModule({
  declarations: [OptionsComponent, OptionsLeftbarComponent, OptionsRightbarComponent],
  imports: [CommonModule, BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule],
})
export class OptionsModule {}
