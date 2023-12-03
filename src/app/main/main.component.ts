import {Component, Input, OnInit} from '@angular/core';
import {Chat} from 'src/app/shared/chat-db';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  @Input() public currentChat: Chat = {
    id: 0,
    ico: '',
    name: '',
  };

  public hideChatSection: boolean = true;
  public hideRightbar: boolean = true;

  ngOnInit(): void {}

  public showChatSection(): void {
    this.hideChatSection = !this.hideChatSection;
  }

  public getCurrentChat(chat: Chat): void {
    this.currentChat = chat;
  }

  public showRightbar(): void {
    this.hideRightbar = !this.hideRightbar;
  }
}
