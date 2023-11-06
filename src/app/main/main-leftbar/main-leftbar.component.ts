import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Chat } from 'src/app/shared/chat-db';

@Component({
  selector: 'app-main-leftbar',
  templateUrl: './main-leftbar.component.html',
  styleUrls: ['./main-leftbar.component.scss'],
})
export class MainLeftbarComponent implements OnInit {
  @Input() user: Object = {
    id: 1,
    ico: '',
    name: '',
    role: '',
  };

  @Output() rightbarListener = new EventEmitter<boolean>();
  @Output() currentChat: EventEmitter<Chat> = new EventEmitter<Chat>();

  public hideNotifi: boolean = true;
  public hideOptions: boolean = true;
  public hideContextMenu: boolean = true;
  public hideRightbar: boolean = true;
  public contextMenuPosition: any;
  public selectedButton: string = '';
  public chats: Chat[] = [];
  public test: any = '';

  ngOnInit(): void {}

  public showAside(event?: any): void {
    /*
      добавить проверку на вторую открытую панель
      закрывать при клике ЛКМ на свободном месте
    */

    // if (this.hideOptions === true) {
    //   return;
    // }

    this.hideNotifi = !this.hideNotifi;
  }

  public showOptions(): boolean {
    /*
      добавить проверку на вторую открытую панель
      закрывать при клике ЛКМ на свободном месте
    */

    this.hideOptions = !this.hideOptions;
    return true;
  }

  public showRightbar(item: Chat): boolean {
    /*
      не закрывать райтбар по нажатию на название канала
    */

    this.hideRightbar = !this.hideRightbar;
    this.currentChat.emit(item);
    return true;
  }

  public openContextMenu(event: MouseEvent): void {
    /*
      меняется размер окна и появляется скролл, если вызвать меню в самом низу
    */

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

  public createChannel(): void {
    /*
      добавить проверку на одинаковое название
      передавать название канала из инпута в райтбар
      передавать название канала из инпута в хедер
    */

    const temp: Chat = {
      id: 0,
      ico: '',
      name: 'test',
      msgs: 0,
    };

    this.chats.push(temp);
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
}
