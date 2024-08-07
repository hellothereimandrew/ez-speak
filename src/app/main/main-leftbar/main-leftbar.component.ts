import {Component, EventEmitter, HostListener, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Subscription, take} from 'rxjs';
import {DecorationService} from 'src/app/shared/services/decoration.service';
import {Chat} from 'src/app/shared/interfaces/chat-db';
import {PopupData} from 'src/app/shared/interfaces/popup-data';
import {AuthService} from '../../auth/auth.service';
import {User} from '../../shared/interfaces/user';
import {StateService} from '../../shared/services/state.service';

@Component({
  selector: 'app-main-leftbar',
  templateUrl: './main-leftbar.component.html',
  styleUrls: ['./main-leftbar.component.scss'],
})
export class MainLeftbarComponent implements OnInit, OnDestroy {
  @Input() public folderName: string = '';

  @Output() public currentChat: EventEmitter<Chat> = new EventEmitter<Chat>();

  public selectedTheme: string = '';
  public channelName: string = '';
  public channelCounterId: number = 1;
  public leftbarWidth: number = 346;
  public hideContextMenu: boolean = true;
  public showPopup: boolean = false;
  public themeSubscription: Subscription = new Subscription();
  public contextMenuPosition: {x: number; y: number} = {x: 0, y: 0};
  public popupData: PopupData = {
    message: '',
    firstButton: '',
    secondButton: '',
  };
  public chats: Chat[] = [];
  public pinnedChats: Chat[] = [];
  public user!: User;

  constructor(
    public decorationService: DecorationService,
    public stateService: StateService,
    private authService: AuthService,
  ) {}

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

  ngOnInit(): void {
    this.getUserInfo();

    this.themeSubscription = this.decorationService.selectedTheme$.pipe(take(1)).subscribe((theme: string): void => {
      this.selectedTheme = theme;
    });
  }

  public ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
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
    this.stateService.hideChatSection = false;
    this.currentChat.emit(item);
  }

  public openContextMenu(event: MouseEvent): void {
    event.preventDefault();
    this.hideContextMenu = false;
    this.contextMenuPosition = {
      x: event.clientX - 10,
      y: event.clientY - 10,
    };
  }

  public openPopup(chat: Chat): void {
    this.showPopup = true;

    this.popupData = {
      message: 'Вы уверены, что хотите удалить канал?',
      firstButton: 'Да',
      secondButton: 'Нет',
      confirmed: () => {
        this.removeChannel(chat);
      },
    };
  }

  public closeContextMenu(): void {
    this.hideContextMenu = true;
  }
}
