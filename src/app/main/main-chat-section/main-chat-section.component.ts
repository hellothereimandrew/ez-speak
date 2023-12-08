import {AfterViewChecked, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {DecorationService} from 'src/app/services/decoration.service';
import {Chat} from 'src/app/shared/chat-db';
import {Message} from 'src/app/shared/messages-db';

@Component({
  selector: 'app-main-chat-section',
  templateUrl: './main-chat-section.component.html',
  styleUrls: ['./main-chat-section.component.scss'],
})
export class MainChatSectionComponent implements OnInit, AfterViewChecked {
  constructor(private decoreationServise: DecorationService) {}

  @ViewChild('scrollable') public scrollable!: ElementRef;

  @Input() currentChat: Chat = {
    id: 0,
    ico: '',
    name: '',
  };

  @Output() rightbarListener: EventEmitter<boolean> = new EventEmitter<boolean>();

  public contextMenuPosition: any;
  public hideContextMenu: boolean = true;
  public hideDropDown: boolean = true;
  public isActive: boolean = false;
  public isPrivate: boolean = false;
  public openRightBar: boolean = false;
  public showPinnedMsg: boolean = false;
  public showChatSection: boolean = false;

  public messages: Message[] = [];

  ngOnInit(): void {}

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

  public openContextMenu(event: any): void {
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

  public showDropDown(): void {
    this.hideDropDown = !this.hideDropDown;
  }

  public showRightBar(): void {
    this.openRightBar = !this.openRightBar;
  }

  public scrollClaimedToBottom(): void {
    const scrollContainer = this.scrollable.nativeElement;
    scrollContainer.scrollTop = scrollContainer.scrollHeight;
  }
}
