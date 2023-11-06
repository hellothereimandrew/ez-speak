import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-main-leftbar-aside-notifi',
  templateUrl: './main-leftbar-aside-notifi.component.html',
  styleUrls: ['./main-leftbar-aside-notifi.component.scss'],
})
export class MainLeftbarAsideNotifiComponent implements OnInit {
  @Output()
  public hideNotifi: EventEmitter<void> = new EventEmitter();

  public notifiList = {
    date: new Date().toLocaleDateString(),
    time: new Date().toLocaleTimeString().slice(0, -3),
    type: '',
    text: 'Пропущен звонок от Санчоуса',
  };

  ngOnInit(): void {}

  constructor() {}

  public clearNotifications(): void {
    console.log('clear');
  }
}
