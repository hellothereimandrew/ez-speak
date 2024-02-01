import {Injectable} from '@angular/core';
import {Chat} from '../interfaces/chat-db';

@Injectable({
  providedIn: 'root',
})
export class PopupService {
  constructor() {}

  public showPopup: boolean = false;

  public popupData: {
    message: string;
    firstButton: string;
    secondButton: string;
    confirmed: boolean;
    canceled: boolean;
  } = {
    message: '',
    firstButton: '',
    secondButton: '',
    confirmed: false,
    canceled: false,
  };

  public currentChat: Chat = {};

  public confirmed(): void {
    this.popupData.confirmed;
    this.showPopup = false;
  }

  public canceled(): void {
    this.popupData.canceled;
    this.showPopup = false;
  }
}
