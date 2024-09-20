import {Component, EventEmitter, HostListener, Input, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {Subscription, take} from 'rxjs';
import {DecorationService} from 'src/app/shared/services/decoration.service';
import {Chat} from 'src/app/shared/interfaces/chat-db';
import {PopupData} from 'src/app/shared/interfaces/popup-data';
import {AuthService} from '../../auth/auth.service';
import {User} from '../../shared/interfaces/user';
import {StateService} from '../../shared/services/state.service';
import {ContextMenuService} from '../../shared/components/context-menu/context-menu.service';
import {ContextMenuComponent} from '../../shared/components/context-menu/context-menu.component';

@Component({
  selector: 'app-main-leftbar',
  templateUrl: './main-leftbar.component.html',
  styleUrls: ['./main-leftbar.component.scss'],
  providers: [ContextMenuService],
})
export class MainLeftbarComponent implements OnInit, OnDestroy {
  @Input() public folderName: string = '';

  @Output() public currentChat: EventEmitter<Chat> = new EventEmitter<Chat>();

  @ViewChild('contextMenu') public contextMenu!: ContextMenuComponent;

  public themeSubscription: Subscription = new Subscription();
  public selectedTheme: string = '';
  public channelName: string = '';
  public channelCounterId: number = 1;
  public leftbarWidth: number = 346;

  public chats: Chat[] = [];
  public pinnedChats: Chat[] = [];
  public user!: User;

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
    this.themeSubscription = this.decorationService.selectedTheme$.pipe(take(1)).subscribe((theme: string): void => {
      this.selectedTheme = theme;
    });
    this.getUserInfo();
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

  public createChannel(name?: string): void {
    const temp: Chat = {
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

  public removeChannel(chat: Chat): void {
    this.chats.splice(this.chats.indexOf(chat), 1);
    this.stateService.hideChatSection = true;
  }

  public pinChannel(currentChat?: Chat): void {
    let pinnedChat: any = currentChat;
    pinnedChat.pinned = true;
    this.pinnedChats.push(pinnedChat);
  }

  public unpinChannel(pinnedChat: Chat): void {
    pinnedChat.pinned = false;
    this.pinnedChats.splice(this.pinnedChats.indexOf(pinnedChat), 1);
    this.stateService.hideChatSection = true;
  }

  public showChatSection(item: Chat): void {
    this.stateService.hideChatSection = false;
    this.currentChat.emit(item);
  }

  public openContextMenu(event: MouseEvent, chat?: Chat): void {
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

  public generatePrimaryContextItems(chat: Chat): void {
    this.contextMenuService.primaryMenuItems = [
      {
        name: chat.pinned ? 'Открепить канал' : 'Закрепить канал',
        method: (): void => (chat.pinned ? this.unpinChannel(chat) : this.pinChannel(chat)),
      },
      {
        name: 'Удалить канал',
        method: (): void => this.openPopup(chat),
      },
    ];
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
