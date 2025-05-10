import {Component, ElementRef, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Subject, Subscription, take, takeUntil} from 'rxjs';
import {DecorationService} from 'src/app/shared/services/decoration.service';
import {IChat} from 'src/app/shared/interfaces/IChat';
import {StateService} from '../../shared/services/state.service';
import {ContextMenuComponent} from '../../shared/components/context-menu/context-menu.component';
import {AuthService} from '../../auth/auth.service';
import {User} from '../../shared/models/user.model';
import {MainRightbarService} from '../main-rightbar/main-rightbar.service';
import {Message} from '../../shared/models/message.model';

@Component({
  selector: 'app-main-chat-section',
  templateUrl: './main-chat-section.component.html',
  styleUrls: ['./main-chat-section.component.scss'],
  providers: [ContextMenuComponent],
})
export class MainChatSectionComponent implements OnInit, OnDestroy {
  @Input() public currentChat: IChat = {
    id: 0,
    ico: '',
    name: '',
  };

  @ViewChild('messageInput') public messageInput!: ElementRef;
  @ViewChild('lastMessageRef') public lastMessageRef!: ElementRef;
  @ViewChild('contextMenu') public contextMenu: ContextMenuComponent = new ContextMenuComponent();

  public messages: Message[] = [];
  public pickedMessages: Message[] = [];
  public pinnedMessage: Message = new Message();
  public messageForReply: Message = new Message();
  public user: User = new User();
  public timer: any;

  public selectedTheme: string = '';
  public selectedBackground: string = '';
  public hideDropdown: boolean = true;

  public themeSubscription: Subscription = new Subscription();
  public backgroundSubscription: Subscription = new Subscription();
  public unsubscribe: Subject<void> = new Subject();
  public messagePickerEnabled: boolean = false;

  constructor(
    private authService: AuthService,
    public stateService: StateService,
    public decorationServise: DecorationService,
    public rightbarService: MainRightbarService,
  ) {}

  ngOnInit(): void {
    this.getUserInfo();
    this.initSubscribes();
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
    this.backgroundSubscription.unsubscribe();
  }

  public getUserInfo(): void {
    this.user = JSON.parse(this.authService.getUser);
  }

  public initSubscribes(): void {
    this.themeSubscription = this.decorationServise.selectedTheme$.pipe(take(1)).subscribe((theme: string): void => {
      this.selectedTheme = theme;
    });

    this.backgroundSubscription = this.decorationServise.selectedImage$
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((image: string): void => {
        this.selectedBackground = image;
      });
  }

  public sendMessage(event?: any): void {
    const message: Message = {
      id: 1,
      isMine: true,
      ico: this.user.ico,
      user: this.user,
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString().slice(0, -3),
      text: event.target.value.trim(),
      pinned: false,
      picked: false,
    };

    if (message.text.length > 0) {
      this.messages.push(message);
      event.target.value = '';
      this.scrollToLastMessage();
    }
  }

  public openContextMenu(event: MouseEvent, message: Message): void {
    this.contextMenu.openContextMenu(event);
    this.generateMainContextItems(message);
  }

  public openDropdown(): void {
    this.hideDropdown = false;
  }

  public closeDropdown(): void {
    this.hideDropdown = true;
  }

  public closeAllWindows(): void {
    this.closeDropdown();
    this.contextMenu.closeContextMenu();
    this.stateService.openRightbar = false;
  }

  public test(message: Message): void {
    this.selectMessageWithDelay(message);
  }

  public selectMessageWithDelay(message: Message): void {
    if (!this.messagePickerEnabled) {
      this.timer = setTimeout((): void => {
        this.messagePickerEnabled = true;
        message.picked = true;
      }, 700);
    }
  }

  public pickMessage(message: Message): void {
    message.picked = true;
    this.pickedMessages.push(message);
  }

  public unpickMessage(message: Message): void {
    message.picked = false;
    this.pickedMessages.splice(this.pickedMessages.indexOf(message), 1);
  }

  public replyToMessage(message: Message): void {
    this.messageForReply = message;
  }

  public async copyMessageText(message: Message): Promise<void> {
    try {
      await window.navigator.clipboard.writeText(`${message.text.trim()}`);
    } catch (error) {
      console.error(error);
    }
  }

  public pinMessage(message: Message): void {
    this.messages.forEach((m: Message): void => {
      m.pinned = false;
    });

    message.pinned = true;
    this.pinnedMessage = message;
  }

  public unpinMessage(message: Message): void {
    message.pinned = false;
    this.pinnedMessage = new Message();
  }

  public editMessageText(message: Message): void {
    message.text = 'new text message';
  }

  public removeMessage(message: Message): void {
    this.messages.splice(this.messages.indexOf(message), 1);
  }

  public getUserByMessage(message: Message, mouseEvent: MouseEvent): void {
    // При нажатии на иконку в райтбаре не отрисовывается инфа о пользователе

    mouseEvent.stopPropagation();
    this.rightbarService.userData = message.user;
    this.openRightBar();
  }

  public getChatInfo(): void {
    this.rightbarService.chatData = this.currentChat;
    this.rightbarService.chatData.ico = '../assets/img/6YpRjbulh1Q.jpg';
    this.openRightBar();
  }

  public openRightBar(): void {
    this.stateService.openRightbar = true;
  }

  public scrollToLastMessage(): void {
    const lastMessageRef = this.lastMessageRef.nativeElement;
    lastMessageRef.scrollTop = lastMessageRef.scrollHeight;
  }

  public generateMainContextItems(message: Message): void {
    this.contextMenu.menu.main = [];

    this.contextMenu.menu.main.push(
      {
        name: message?.pinned ? 'Открепить' : 'Закрепить',
        method: (): void => (message?.pinned ? this.unpinMessage(message) : this.pinMessage(message)),
      },
      {
        name: message.picked ? 'Отменить выделение' : 'Выделить',
        method: (): void => (message.picked ? this.unpickMessage(message) : this.pickMessage(message)),
      },
      {
        name: 'Ответить',
        method: (): void => this.replyToMessage(message),
      },
      {
        name: 'Переслать',
        method: (): void => void {},
      },
      {
        name: 'Копировать текст',
        method: async (): Promise<void> => this.copyMessageText(message),
      },
      {
        name: 'Изменить',
        method: (): void => this.editMessageText(message),
      },
      {
        name: 'Удалить',
        method: (): void => this.removeMessage(message),
      },
    );
  }
}
