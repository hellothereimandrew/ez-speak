import {Component, ElementRef, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Subject, Subscription, take, takeUntil} from 'rxjs';
import {DecorationService} from 'src/app/shared/services/decoration.service';
import {IChat} from 'src/app/shared/interfaces/IChat';
import {IMessage} from 'src/app/shared/interfaces/IMessages';
import {StateService} from '../../shared/services/state.service';
import {ContextMenuService} from '../../shared/components/context-menu/context-menu.service';
import {ContextMenuComponent} from '../../shared/components/context-menu/context-menu.component';
import {AuthService} from '../../auth/auth.service';
import {User} from '../../shared/models/user.model';
import {MainRightbarService} from '../main-rightbar/main-rightbar.service';

@Component({
  selector: 'app-main-chat-section',
  templateUrl: './main-chat-section.component.html',
  styleUrls: ['./main-chat-section.component.scss'],
  providers: [ContextMenuService],
})
export class MainChatSectionComponent implements OnInit, OnDestroy {
  @Input() public currentChat: IChat = {
    id: 0,
    ico: '',
    name: '',
  };

  @ViewChild('lastMessageRef') public lastMessageRef!: ElementRef;
  @ViewChild('contextMenu') public contextMenu!: ContextMenuComponent;

  public messages: IMessage[] = [];
  public pinnedMessage!: IMessage;
  public pickedMessages: IMessage[] = [];
  public user: User = new User();

  public selectedTheme: string = '';
  public selectedBackground: string = '';
  public hideDropdown: boolean = true;

  public themeSubscription: Subscription = new Subscription();
  public backgroundSubscription: Subscription = new Subscription();
  public unsubscribe: Subject<void> = new Subject();

  constructor(
    private authService: AuthService,
    private contextMenuService: ContextMenuService,
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
    let message: IMessage = {
      id: 1,
      isMine: true,
      ico: this.user.ico,
      user: this.user,
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString().slice(0, -3),
      text: event.target.value,
      pinned: false,
    };

    if (event.target.value.length > 0) {
      this.messages.push(message);
      event.target.value = '';
      this.scrollToLastMessage();
    }

    return;
  }

  public openContextMenu(event: MouseEvent, message: IMessage): void {
    this.contextMenu.openContextMenu(event);
    this.generateMainContextItems(message);
  }

  public openDropdown(): void {
    this.hideDropdown = false;
  }

  public closeAll(): void {
    this.closeDropdown();
    this.contextMenu.closeContextMenu();
    this.stateService.openRightbar = false;
  }

  public closeDropdown(): void {
    this.hideDropdown = true;
  }

  public generateMainContextItems(message: IMessage): void {
    this.contextMenuService.mainMenuItems = [
      {
        name: message.picked ? 'Отменить выделение' : 'Выделить',
        method: (): void => this.pickMessage(message),
      },
      {
        name: 'Ответить',
        method: (): void => void {},
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
        name: message?.pinned ? 'Открепить' : 'Закрепить',
        method: (): void => (message?.pinned ? this.unpinMessage(message) : this.pinMessage(message)),
      },
      {
        name: 'Изменить',
        method: (): void => this.editMessageText(message),
      },
      {
        name: 'Удалить',
        method: (): void => this.removeMessage(message),
      },
    ];
  }

  public pickMessage(message: IMessage): void {
    message.picked = true;
    this.pickedMessages.push(message);
  }

  // public replyToMessage(): void {}
  //
  // public redirectMessage(message: string): void {}

  public async copyMessageText(message: IMessage): Promise<void> {
    try {
      await window.navigator.clipboard.writeText(`${message.text.trim()}`);
    } catch (error) {
      console.error(error);
    }
  }

  public pinMessage(message: IMessage): void {
    message.pinned = true;
    this.pinnedMessage = message;
  }

  public unpinMessage(message: IMessage): void {
    message.pinned = false;
  }

  public editMessageText(message: IMessage): void {
    message.text = 'new text message';
  }

  public removeMessage(message: IMessage): void {
    this.messages.splice(this.messages.indexOf(message), 1);
  }

  public getUserByMessage(message: IMessage, mouseEvent: MouseEvent): void {
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
}
