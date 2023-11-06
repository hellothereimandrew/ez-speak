import { Component, OnInit } from '@angular/core';
import { Chat } from 'src/app/shared/chat-db';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  public hideRightbar: boolean = true;
  public currentChat: Chat = {
    id: 0,
    ico: '',
    name: '',
  };

  ngOnInit(): void {}

  public showRightbar(): void {
    this.hideRightbar = !this.hideRightbar;
  }

  public getCurrentChat(chat: Chat): void {
    this.currentChat = chat;
  }
}
