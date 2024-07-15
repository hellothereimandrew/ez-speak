import {Component, HostListener, Input, OnDestroy, OnInit} from '@angular/core';
import {Chat} from 'src/app/shared/interfaces/chat-db';
import {DecorationService} from '../shared/services/decoration.service';
import {Subscription} from 'rxjs';
import {User} from '../shared/interfaces/user';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit, OnDestroy {
  @Input() folderName: string = '';

  @Input() public user: User = {
    id: 0,
    ico: '',
    name: '',
    role: '',
    status: '',
  };

  @Input() public currentChat: Chat = {
    id: 0,
    ico: '',
    name: '',
  };
  public hideChatSection: boolean = true;
  public hideRightbar: boolean = true;
  public hideFolderPopup: boolean = true;
  public selectedTheme: string = '';
  public themeSubscription: Subscription = new Subscription();

  constructor(private decoreationServise: DecorationService) {}

  @HostListener('window:keyup', ['$event'])
  public setHotkeys(event: KeyboardEvent): void {
    event.preventDefault();

    if (!this.hideChatSection && event.code === 'Escape') {
      this.hideChatSection = true;
      this.hideRightbar = true;
    }
  }

  ngOnInit(): void {
    this.themeSubscription = this.decoreationServise.selectedTheme$.subscribe((theme) => {
      this.selectedTheme = theme;
    });
  }

  public getCurrentChat(chat: Chat): void {
    this.currentChat = chat;
  }

  public getFolderName(folderName: string): void {
    this.folderName = folderName;
  }

  public showFolderPopUp(): void {
    this.hideFolderPopup = !this.hideFolderPopup;
    console.log(this.hideFolderPopup);
  }

  public showChatSection(): void {
    this.hideChatSection = false;
  }

  public showRightbar(): void {
    this.hideRightbar = !this.hideRightbar;
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
