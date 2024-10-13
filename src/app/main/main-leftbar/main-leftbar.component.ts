import {Component, EventEmitter, HostListener, Input, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {Subscription, take} from 'rxjs';
import {DecorationService} from 'src/app/shared/services/decoration.service';
import {IChat} from 'src/app/shared/interfaces/IChat';
import {PopupData} from 'src/app/shared/interfaces/popup-data';
import {AuthService} from '../../auth/auth.service';
import {StateService} from '../../shared/services/state.service';
import {ContextMenuService} from '../../shared/components/context-menu/context-menu.service';
import {ContextMenuComponent} from '../../shared/components/context-menu/context-menu.component';
import {User} from '../../shared/models/user.model';

@Component({
  selector: 'app-main-leftbar',
  templateUrl: './main-leftbar.component.html',
  styleUrls: ['./main-leftbar.component.scss'],
  providers: [ContextMenuService],
})
export class MainLeftbarComponent implements OnInit, OnDestroy {
  @Input() public folderName: string = '';

  @Output() public currentChat: EventEmitter<IChat> = new EventEmitter<IChat>();

  @ViewChild('contextMenu') public contextMenu!: ContextMenuComponent;

  public themeSubscription: Subscription = new Subscription();
  public selectedTheme: string = '';
  public channelName: string = '';
  public channelCounterId: number = 1;
  public leftbarWidth: number = 346;

  public chats: IChat[] = [];
  public pinnedChats: IChat[] = [];
  public user: User = new User();

  public showPopup: boolean = false;
  public popupData: PopupData = {
    message: '',
    firstButton: '',
    secondButton: '',
  };

  constructor(
    private authService: AuthService,
    private contextMenuService: ContextMenuService,
    public decorationService: DecorationService,
    public stateService: StateService,
  ) {}

  ngOnInit(): void {
    this.getUserInfo();
    this.initSubcribes();
  }

  public ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }

  @HostListener('window:mousemove', ['$event'])
  public resizeLeftbar(event: MouseEvent): void {
    if (this.stateService.isResized) {
      this.leftbarWidth = event.clientX;

      if (this.leftbarWidth <= 346) {
        this.leftbarWidth = 346;
        this.stateService.isResized = false;
      }
    } else {
      this.stateService.isResized = false;
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
    const temp: IChat = {
      id: this.channelCounterId++,
      ico: '',
      name: name,
      time: new Date().toLocaleTimeString().slice(0, -3),
      userName: this.user.name,
      lastMsg: 'Уже круче, чем телега!',
      msgs: 0,
      pinned: false,
    };

    if (name) {
      this.chats.push(temp);
      this.channelName = '';
      this.stateService.showControls = false;
    }
  }

  public removeChannel(chat: IChat): void {
    this.chats.splice(this.chats.indexOf(chat), 1);
    this.stateService.hideChatSection = true;
  }

  public pinChannel(currentChat: IChat): void {
    currentChat.pinned = true;
    this.pinnedChats.push(currentChat);
  }

  public unpinChannel(pinnedChat: IChat): void {
    pinnedChat.pinned = false;
    this.pinnedChats.splice(this.pinnedChats.indexOf(pinnedChat), 1);
    this.stateService.hideChatSection = true;
  }

  public showChatSection(item: IChat): void {
    this.stateService.hideChatSection = false;
    this.currentChat.emit(item);
  }

  public openContextMenu(event: MouseEvent, chat?: IChat): void {
    this.contextMenu.openContextMenu(event);
    this.generateMainContextItems();

    if (chat) {
      this.generatePrimaryContextItems(chat);
    }
  }

  public generateMainContextItems(): void {
    this.contextMenuService.mainMenuItems = [
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
    ];
  }

  public generatePrimaryContextItems(chat: IChat): void {
    this.contextMenuService.primaryMenuItems = [
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
    ];
  }

  public openPopup(chat: IChat): void {
    this.showPopup = true;

    this.popupData = {
      message: 'Вы уверены, что хотите удалить канал?',
      firstButton: 'Да',
      secondButton: 'Нет',
      confirmed: (): void => this.removeChannel(chat),
    };
  }
}
