import {Component, EventEmitter, HostListener, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Subscription} from 'rxjs';
import {DecorationService} from 'src/app/shared/services/decoration.service';
import {Chat} from 'src/app/shared/interfaces/chat-db';
import {Folder} from 'src/app/shared/interfaces/folder';
import {Users} from 'src/app/shared/interfaces/users-db';
import {PopupData} from 'src/app/shared/interfaces/popup-data';

@Component({
  selector: 'app-main-leftbar',
  templateUrl: './main-leftbar.component.html',
  styleUrls: ['./main-leftbar.component.scss'],
})
export class MainLeftbarComponent implements OnInit, OnDestroy {
  @Input() public folderName: string = '';

  @Input() public user: Users = {
    id: 0,
    ico: '',
    name: '',
    role: '',
    status: '',
  };

  @Output() public chatSectionListener: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() public showCreateFolder: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() public currentChat: EventEmitter<Chat> = new EventEmitter<Chat>();

  @HostListener('window:mousemove', ['$event']) public resizeLeftbar(event: MouseEvent): void {
    if (this.isResized) {
      this.leftbarWidth = event.clientX;

      if (this.leftbarWidth <= 289) {
        this.leftbarWidth = 289;
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
  public hideExpandedPanel: boolean = true;
  public showControls: boolean = false;
  public showSearch: boolean = false;
  public isResized: boolean = false;
  public showPopup: boolean = false;

  public selectedTheme: string = '';
  public selectedButton: string = '';
  public channelName: string = '';

  public channelCounterId: number = 1;
  public leftbarNavHeight: number = 43;
  public leftbarWidth: number = 289;

  public themeSubscription: Subscription = new Subscription();
  public contextMenuPosition: any;

  public popupData: PopupData = {
    message: '',
    firstButton: '',
    secondButton: '',
  };

  public chats: Chat[] = [];
  public pinnedChats: Chat[] = [];
  public customFolders: Folder[] = [];
  public defaultFolders: Folder[] = [
    {
      id: 1,
      ico: 'private.svg',
      name: 'Личные сообщения',
    },

    {
      id: 2,
      ico: 'group.svg',
      name: 'Группы',
    },

    {
      id: 3,
      ico: 'group.svg',
      name: 'Каналы',
    },

    {
      id: 4,
      ico: 'notifi.svg',
      name: 'Уведомления',
    },

    {
      id: 5,
      ico: 'plus.svg',
      name: 'Добавить папку',
    },
  ];

  ngOnInit(): void {
    this.openExpandedPanel();
    this.themeSubscription = this.decoreationService.selectedTheme$.subscribe((theme) => {
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

  public createNewFolder() {
    this.showCreateFolder.emit();

    const newFolder: Folder = {
      id: 0,
      ico: '',
      name: this.folderName,
    };

    if (this.defaultFolders.length >= 5) {
      this.customFolders.push(newFolder);
      this.openExpandedPanel();
    }
  }

  public openExpandedPanel() {
    const defaultNavHeight: number = 43;

    if (this.customFolders.length > 0) {
      this.hideExpandedPanel = false;
      this.leftbarNavHeight = defaultNavHeight * 2;
    } else {
      this.leftbarNavHeight = defaultNavHeight;
    }
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

  public showNotifi(): void {
    this.hideNotifi = !this.hideNotifi;
  }

  public showOptions(): void {
    this.hideOptions = !this.hideOptions;
  }

  public ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
