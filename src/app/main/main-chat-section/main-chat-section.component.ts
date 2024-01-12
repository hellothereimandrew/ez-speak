import {
  AfterViewChecked,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import {Subscription} from 'rxjs';
import {DecorationService} from 'src/app/services/decoration.service';
import {Chat} from 'src/app/shared/chat-db';
import {Message} from 'src/app/shared/messages-db';

@Component({
  selector: 'app-main-chat-section',
  templateUrl: './main-chat-section.component.html',
  styleUrls: ['./main-chat-section.component.scss'],
})
export class MainChatSectionComponent implements OnInit, OnDestroy, AfterViewChecked {
  @Input() public currentChat: Chat = {
    id: 0,
    ico: '',
    name: '',
  };

  @Output() public rightbarListener: EventEmitter<boolean> = new EventEmitter<boolean>();

  @ViewChild('scrollable') public scrollable!: ElementRef;

  public contextMenuPosition: any;
  public hideContextMenu: boolean = true;
  public hideDropDown: boolean = true;
  public isActive: boolean = false;
  public isPrivate: boolean = false;
  public openRightBar: boolean = false;
  public showPinnedMsg: boolean = false;
  public showChatSection: boolean = false;
  public selectedTheme: string = '';
  public messages: Message[] = [];
  public themeSubscription: Subscription = new Subscription();

  constructor(private decoreationServise: DecorationService) {}

  ngOnInit(): void {
    this.themeSubscription = this.decoreationServise.selectedTheme$.subscribe((theme) => {
      this.selectedTheme = theme;
    });
  }

  ngAfterViewChecked() {
    this.scrollClaimedToBottom();
  }

  public sendMessage(event?: any): void {
    let message: Message = {
      id: 1,
      isMine: true,
      ico: '../assets/img/ZKoQpzcDggWg2ogpkHjR9JnzY9lbPC7wR_gI-BZX5ncn7VOpt-G_a2jJmQBzC4gx.jpg',
      user: 'Андрей Дарий',
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString().slice(0, -3),
      text: event.target.value,
      pinned: false,
    };

    if (event.target.value.length > 0) {
      this.messages.push(message);
      event.target.value = '';
    }

    return;
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

  public openDropDown(): void {
    this.hideDropDown = false;
  }

  public closeDropDown(): void {
    this.hideDropDown = true;
  }

  public showRightBar(): void {
    this.openRightBar = !this.openRightBar;
  }

  public scrollClaimedToBottom(): void {
    const scrollContainer = this.scrollable.nativeElement;
    scrollContainer.scrollTop = scrollContainer.scrollHeight;
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
