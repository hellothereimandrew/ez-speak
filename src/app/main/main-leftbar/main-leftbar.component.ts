import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Chat } from 'src/app/shared/chat-db';
import { Users } from 'src/app/shared/users-db';

@Component({
  selector: 'app-main-leftbar',
  templateUrl: './main-leftbar.component.html',
  styleUrls: ['./main-leftbar.component.scss'],
})
export class MainLeftbarComponent implements OnInit {
  @Input() user: Users = {
    id: 0,
    ico: '',
    name: '',
    role: '',
  };

  @Output() rightbarListener: EventEmitter<boolean> =
    new EventEmitter<boolean>();
  @Output() currentChat: EventEmitter<Chat> = new EventEmitter<Chat>();

  public hideNotifi: boolean = true;
  public hideOptions: boolean = true;
  public hideContextMenu: boolean = true;
  public hideRightbar: boolean = true;
  public showControls: boolean = false;
  public showSearch: boolean = false;
  public pinned: boolean = false;
  public contextMenuPosition: any;
  public selectedButton: string = '';
  public channelName: string = '';
  public chats: Chat[] = [];
  public pinnedChats: Chat[] = [];
  public channelCounterId: number = 1;

  ngOnInit(): void {}

  public showAside(event?: any): void {
    this.hideNotifi = !this.hideNotifi;
  }

  public showOptions(): boolean {
    this.hideOptions = !this.hideOptions;
    return true;
  }

  public showRightbar(item: Chat): void {
    this.hideRightbar = false;
    this.currentChat.emit(item);
  }

  public createChannel(name?: string, pinned?: boolean): void {
    const temp: Chat = {
      id: this.channelCounterId++,
      ico: '',
      name: name,
      msgs: 0,
      pinned: pinned,
    };

    if (name) {
      this.chats.push(temp);
      this.channelName = '';
      if (pinned) {
        this.pinnedChats.push(temp);
      }
    }
  }

  public pin(pinned: boolean, name?: string): void {
    /* 
      сделать открепление канала
      удалять закрепленный канал, если отсутствует канал в списке
    */
    const temp: Chat = {
      id: this.channelCounterId++,
      ico: '',
      name: name,
      msgs: 0,
      pinned: pinned,
    };

    this.pinnedChats.push(temp);
  }

  public unpin(): void {
    console.log('unpinned');
  }

  public removeChannel(chat: Chat): void {
    this.chats.splice(this.chats.indexOf(chat), 1);
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
}
