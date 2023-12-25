import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Subscription} from 'rxjs';
import {DecorationService} from 'src/app/services/decoration.service';
import {Chat} from 'src/app/shared/chat-db';
import {Users} from 'src/app/shared/users-db';

@Component({
  selector: 'app-main-leftbar',
  templateUrl: './main-leftbar.component.html',
  styleUrls: ['./main-leftbar.component.scss'],
})
export class MainLeftbarComponent implements OnInit, OnDestroy {
  @Input() user: Users = {
    id: 0,
    ico: '',
    name: '',
    role: '',
    status: '',
  };

  @Output() chatSectionListener: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() currentChat: EventEmitter<Chat> = new EventEmitter<Chat>();

  public hideNotifi: boolean = true;
  public hideOptions: boolean = true;
  public hideContextMenu: boolean = true;
  public hideChatSection: boolean = true;
  public showControls: boolean = false;
  public showSearch: boolean = false;
  public selectedTheme: string = '';
  public selectedButton: string = '';
  public channelName: string = '';
  public chats: Chat[] = [];
  public pinnedChats: Chat[] = [];
  public channelCounterId: number = 1;
  public contextMenuPosition: any;
  public themeSubscription: Subscription = new Subscription();

  constructor(private decoreationServise: DecorationService) {}

  ngOnInit(): void {
    this.themeSubscription = this.decoreationServise.selectedTheme$.subscribe((theme) => {
      this.selectedTheme = theme;
    });
  }

  public showAside(event?: any): void {
    this.hideNotifi = !this.hideNotifi;
  }

  public showOptions(): void {
    this.hideOptions = !this.hideOptions;
  }

  public showChatSection(item: Chat): void {
    this.hideChatSection = false;
    this.currentChat.emit(item);
    this.chatSectionListener.emit();
  }

  public createChannel(name?: string): void {
    const temp: Chat = {
      id: this.channelCounterId++,
      ico: '',
      name: name,
      lastMsg: 'уже круче, чем телега!',
      msgs: 0,
      pinned: false,
    };

    if (name) {
      this.chats.push(temp);
      this.channelName = '';
    }
  }

  public removeChannel(chat: Chat): void {
    this.chats.splice(this.chats.indexOf(chat), 1);
  }

  public pin(pinned: boolean, name?: string): void {
    // const pinnedChats: Chat[] = this.chats;

    const temp: Chat = {
      id: this.channelCounterId++,
      ico: '',
      name: name,
      lastMsg: 'уже круче, чем телега!',
      msgs: 0,
      pinned: pinned,
    };

    this.pinnedChats.push(temp);
  }

  public unpin(pinnedChat: Chat): void {
    this.pinnedChats.splice(this.pinnedChats.indexOf(pinnedChat), 1);
  }

  public onSelect(button: string): void {
    if (this.selectedButton === button) {
      this.selectedButton = '';
    } else {
      this.selectedButton = button;
    }
  }

  public openContextMenu(event: MouseEvent): void {
    event.preventDefault();
    this.hideContextMenu = false;
    this.contextMenuPosition = {
      x: event.clientX - 10,
      y: event.clientY - 10,
    };
  }

  public closeContextMenu(): void {
    this.hideContextMenu = true;
  }

  public ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
