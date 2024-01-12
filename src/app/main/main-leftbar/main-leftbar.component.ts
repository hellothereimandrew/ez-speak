import {Component, ElementRef, EventEmitter, HostListener, Input, OnDestroy, OnInit, Output} from '@angular/core';
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
  @Input() public user: Users = {
    id: 0,
    ico: '',
    name: '',
    role: '',
    status: '',
  };

  @Output() public chatSectionListener: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() public currentChat: EventEmitter<Chat> = new EventEmitter<Chat>();

  @HostListener('document:mousemove', ['$event']) public resizeLeftbar(event: MouseEvent): void {
    if (this.isResized) {
      this.currentLeftbarWidth = event.clientX;
    } else {
      this.isResized = false;
    }
  }

  public leftbarRef!: ElementRef;
  public hideNotifi: boolean = true;
  public hideOptions: boolean = true;
  public hideContextMenu: boolean = true;
  public hideChatSection: boolean = true;
  public showControls: boolean = false;
  public showSearch: boolean = false;
  public isResized: boolean = false;
  public selectedTheme: string = '';
  public selectedButton: string = '';
  public channelName: string = '';
  public chats: Chat[] = [];
  public pinnedChats: Chat[] = [];
  public channelCounterId: number = 1;
  public currentLeftbarWidth: number = 289;
  public themeSubscription: Subscription = new Subscription();
  public contextMenuPosition: any;

  constructor(private decoreationServise: DecorationService) {}

  ngOnInit(): void {
    this.themeSubscription = this.decoreationServise.selectedTheme$.subscribe((theme) => {
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

  public removeChannel(chat: Chat): void {
    this.chats.splice(this.chats.indexOf(chat), 1);
  }

  public pin(pinned: boolean, name?: string, chat?: Chat): void {
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

  public showAside(event?: any): void {
    // if (event) {
    //   this.hideNotifi = false;
    //   this.hideOptions = true;
    //   console.log('hidden');
    // }
    this.hideNotifi = !this.hideNotifi;
  }

  public showOptions(event?: any): void {
    // if (event) {
    //   this.hideOptions = false;
    //   this.hideNotifi = true;
    //   console.log('hidden');
    // }
    this.hideOptions = !this.hideOptions;
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
