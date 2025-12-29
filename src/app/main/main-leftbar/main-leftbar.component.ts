import {Component, EventEmitter, HostListener, Input, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {Subscription, take} from 'rxjs';
import {DecorationService} from 'src/app/shared/services/decoration.service';
import {IChat} from 'src/app/shared/interfaces/IChat';
import {PopupData} from 'src/app/shared/interfaces/popup-data';
import {AuthService} from '../../auth/auth.service';
import {StateService} from '../../shared/services/state.service';
import {ContextMenuComponent} from '../../shared/components/context-menu/context-menu.component';
import {User} from '../../shared/models/user.model';
import {Chat} from '../../shared/models/chat.model';

@Component({
  selector: 'app-main-leftbar',
  templateUrl: './main-leftbar.component.html',
  styleUrls: ['./main-leftbar.component.scss'],
})
export class MainLeftbarComponent implements OnInit, OnDestroy {
  @Input() public folderName: string = '';

  @Output() public currentChat: EventEmitter<IChat> = new EventEmitter<IChat>();

  @ViewChild('contextMenu') public contextMenu: ContextMenuComponent = new ContextMenuComponent();

  public channelName: string = '';
  public channelCounterId: number = 1;
  public leftbarWidth: number = 346;

  public user: User = new User();
  public chats: Chat[] = [];
  public pinnedChats: Chat[] = [];

  public showPopup: boolean = false;
  public popupData: PopupData = {
    message: '',
    firstButton: '',
    secondButton: '',
  };

  public selectedTheme: string = '';
  public themeSubscription: Subscription = new Subscription();

  constructor(
    private authService: AuthService,
    public decorationService: DecorationService,
    public stateService: StateService,
  ) {}

  public ngOnInit(): void {
    this.getUserInfo();
    this.initSubcribes();
  }

  public ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }

  @HostListener('window:mousemove', ['$event'])
  public resizeLeftbar(event: MouseEvent): void {
    const defaultSize: number = 346;

    if (this.stateService.isResized) {
      this.leftbarWidth = event.clientX;

      if (this.leftbarWidth === defaultSize) {
        this.leftbarWidth = defaultSize;
        this.stateService.isResized = false;
      }
    }
  }

  @HostListener('window:keyup', ['$event'])
  public setHotKeys(event: KeyboardEvent): void {
    event.preventDefault();

    if (event.shiftKey && event.code === 'KeyQ') {
      this.stateService.hideOptions = !this.stateService.hideOptions;
    }

    if (event.shiftKey && event.code === 'KeyE') {
      this.stateService.hideNotifications = !this.stateService.hideNotifications;
    }
  }

  public getUserInfo(): void {
    this.user = JSON.parse(this.authService.getUser);
  }

  public initSubcribes(): void {
    this.themeSubscription = this.decorationService.selectedTheme$.pipe(take(1)).subscribe((theme: string): void => {
      this.selectedTheme = theme;
    });
  }

  public createChannel(name: string): void {
    const temp: Chat = {
      id: this.channelCounterId++,
      ico: '',
      name: name.trim(),
      time: new Date().toLocaleTimeString().slice(0, -3),
      userName: this.user.name,
      lastMsg: 'Уже круче, чем телега!',
      msgs: 0,
      pinned: false,
      active: false,
    };

    if (name) {
      this.chats.push(temp);
      this.channelName = '';
      this.stateService.showControls = false;
    }
  }

  public removeChannel(chat: Chat): void {
    if (chat.pinned) {
      this.pinnedChats.splice(this.chats.indexOf(chat), 1);
    }

    this.chats.splice(this.chats.indexOf(chat), 1);
    this.stateService.hideChatSection = true;
  }

  public pinChannel(currentChat: Chat): void {
    this.chats.splice(this.chats.indexOf(currentChat), 1);

    currentChat.pinned = true;
    this.pinnedChats.push(currentChat);
  }

  public unpinChannel(pinnedChat: Chat): void {
    pinnedChat.pinned = false;
    this.pinnedChats.splice(this.pinnedChats.indexOf(pinnedChat), 1);

    this.chats.push(pinnedChat);
    this.stateService.hideChatSection = true;
  }

  public showChatSection(item: Chat): void {
    this.chats.forEach((chat: Chat): void => {
      chat.active = false;
    });

    item.active = true;
    this.currentChat.emit(item);
    this.stateService.hideChatSection = false;
  }

  public openContextMenu(event: MouseEvent, chat?: Chat): void {
    this.contextMenu.openContextMenu(event);
    this.generateMainContextItems();

    if (chat) {
      this.generatePrimaryContextItems(chat);
    }
  }

  public generateMainContextItems(): void {
    this.contextMenu.menu.main = [];

    this.contextMenu.menu.main.push(
      {
        name: 'Поиск',
        method: (): boolean => (this.stateService.showSearch = true),
      },
      {
        name: 'Создать канал',
        method: (): boolean => (this.stateService.showControls = true),
      },
      {
        name: 'Создать папку',
        method: (): void => {},
      },
    );
  }

  public generatePrimaryContextItems(chat: Chat): void {
    this.contextMenu.menu.primary = [];

    this.contextMenu.menu.primary.push(
      {
        name: chat.pinned ? 'Открепить канал' : 'Закрепить канал',
        method: (): void => (chat.pinned ? this.unpinChannel(chat) : this.pinChannel(chat)),
      },
      {
        name: 'Копировать ссылку',
        method: async (): Promise<void> => {
          try {
            await window.navigator.clipboard.writeText(`http://localhost:4300/main/${chat.id}`);
          } catch (error) {
            console.error(error);
          }
        },
      },
      {
        name: 'Удалить канал',
        method: (): void => this.openPopup(chat),
      },
    );
  }

  public openPopup(chat: Chat): void {
    this.showPopup = true;

    this.popupData = {
      message: 'Вы уверены, что хотите удалить канал?',
      firstButton: 'Да',
      secondButton: 'Нет',
      confirmed: (): void => this.removeChannel(chat),
    };
  }
}
