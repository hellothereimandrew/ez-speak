import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Chat} from 'src/app/shared/chat-db';
import {DecorationService} from '../services/decoration.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit, OnDestroy {
  @Input() public currentChat: Chat = {
    id: 0,
    ico: '',
    name: '',
  };

  constructor(private decoreationServise: DecorationService) {}

  public hideChatSection: boolean = true;
  public hideRightbar: boolean = true;
  public selectedTheme: string = '';
  public themeSubscription: Subscription = new Subscription();

  ngOnInit(): void {
    this.themeSubscription = this.decoreationServise.selectedTheme$.subscribe((theme) => {
      this.selectedTheme = theme;
    });
  }

  public showChatSection(): void {
    this.hideChatSection = !this.hideChatSection;
  }

  public getCurrentChat(chat: Chat): void {
    this.currentChat = chat;
  }

  public showRightbar(): void {
    this.hideRightbar = !this.hideRightbar;
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
