import {Component, OnInit} from '@angular/core';
import {StateService} from '../../../shared/services/state.service';

@Component({
  selector: 'app-main-leftbar-aside-notifi',
  templateUrl: './main-leftbar-aside-notifi.component.html',
  styleUrls: ['./main-leftbar-aside-notifi.component.scss'],
})
export class MainLeftbarAsideNotifiComponent implements OnInit {
  public notifiList = {
    date: new Date().toLocaleDateString(),
    time: new Date().toLocaleTimeString().slice(0, -3),
    type: '',
    text: 'Пропущен звонок от Санчоуса',
  };

  constructor(public stateService: StateService) {}

  ngOnInit(): void {}

  public clearNotifications(): void {
    // this.notifiList = [];
    console.log('clear');
  }
}
