import {Component, EventEmitter, HostListener, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Subscription, take} from 'rxjs';
import {DecorationService} from 'src/app/shared/services/decoration.service';
import {Chat} from 'src/app/shared/interfaces/chat-db';
import {Users} from 'src/app/shared/interfaces/users-db';
import {PopupData} from 'src/app/shared/interfaces/popup-data';

@Component({
  selector: 'app-main-leftbar',
  templateUrl: './main-leftbar.component.html',
  styleUrls: ['./main-leftbar.component.scss'],
})
export class MainLeftbarComponent implements OnInit, OnDestroy {
  @Input() public user: Users = {
    id: 0,
    ico: '',
    name: '',
    role: '',
    status: '',
  };

  @Input() public folderName: string = '';

  @Output() public chatSectionListener: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output() public currentChat: EventEmitter<Chat> = new EventEmitter<Chat>();

  @HostListener('window:mousemove', ['$event']) public resizeLeftbar(event: MouseEvent): void {
    if (this.isResized) {
      this.leftbarWidth = event.clientX;

      if (this.leftbarWidth <= 346) {
        this.leftbarWidth = 346;
        this.isResized = false;
      }
    } else {
      this.isResized = false;
    }
  }

  @HostListener('window:keyup', ['$event']) public setHotKeys(event: KeyboardEvent): void {
    event.preventDefault();

    if (event.shiftKey && event.code === 'KeyQ') {
      this.hideOptions = !this.hideOptions;
    }

    if (event.shiftKey && event.code === 'KeyE') {
      this.hideNotifi = !this.hideNotifi;
    }
  }

  constructor(private decoreationService: DecorationService) {}

  public hideNotifi: boolean = true;
  public hideOptions: boolean = true;
  public hideContextMenu: boolean = true;
  public hideChatSection: boolean = true;
  public showControls: boolean = false;
  public showSearch: boolean = false;
  public isResized: boolean = false;
  public showPopup: boolean = false;
  public showCreateFolder: boolean = false;

  public selectedTheme: string = '';
  public selectedButton: string = '';
  public channelName: string = '';

  public channelCounterId: number = 1;
  public leftbarWidth: number = 346;

  public themeSubscription: Subscription = new Subscription();
  public contextMenuPosition: {x: number; y: number} = {x: 0, y: 0};

  public popupData: PopupData = {
    message: '',
    firstButton: '',
    secondButton: '',
  };

  public chats: Chat[] = [];
  public pinnedChats: Chat[] = [];

  ngOnInit(): void {
    this.themeSubscription = this.decoreationService.selectedTheme$.pipe(take(1)).subscribe((theme) => {
      this.selectedTheme = theme;
    });
  }

  public createChannel(name?: string): void {
    const temp: Chat = {
      id: this.channelCounterId++,
      ico: '',
      name: name,
      time: new Date().toLocaleTimeString().slice(0, -3),
      userName: 'Андрей Дарий',
      lastMsg: 'Уже круче, чем телега!',
      msgs: 0,
      pinned: false,
    };

    if (name) {
      this.chats.push(temp);
      this.channelName = '';
    }
  }

  public openPopup(chat: Chat): void {
    this.showPopup = true;

    const popupData: PopupData = {
      message: 'Вы уверены, что хотите удалить канал?',
      firstButton: 'Да',
      secondButton: 'Нет',
      confirmed: () => {
        this.removeChannel(chat);
      },
    };

    this.popupData = popupData;
  }

  public removeChannel(chat: Chat): any {
    this.chats.splice(this.chats.indexOf(chat), 1);
  }

  public pinChannel(currentChat?: Chat): void {
    let pinnedChat: any = currentChat;
    pinnedChat.pinned = true;
    this.pinnedChats.push(pinnedChat);
  }

  public unpinChannel(pinnedChat: Chat): void {
    pinnedChat.pinned = false;
    this.pinnedChats.splice(this.pinnedChats.indexOf(pinnedChat), 1);
  }

  public showChatSection(item: Chat): void {
    this.hideChatSection = false;
    this.currentChat.emit(item);
    this.chatSectionListener.emit();
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
