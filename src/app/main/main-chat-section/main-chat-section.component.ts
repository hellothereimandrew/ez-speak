import {
  AfterViewChecked,
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Message } from 'src/app/shared/messages-db';

@Component({
  selector: 'app-main-chat-section',
  templateUrl: './main-chat-section.component.html',
  styleUrls: ['./main-chat-section.component.scss'],
})
export class MainChatSectionComponent implements OnInit, AfterViewChecked {
  @ViewChild('scrollable') public scrollable!: ElementRef;

  @Output() rightbarListener = new EventEmitter<boolean>();

  public contextMenuPosition: any;
  public hideContextMenu: boolean = true;
  public isActive: boolean = false;
  public isPrivate: boolean = false;
  public openRightBar: boolean = false;
  public currentChatHeader: string = 'EZ-Team';
  public messages: Message[] = [];

  ngOnInit(): void {}

  ngAfterViewChecked() {
    this.scrollAlwaysBottom();
  }

  public sendMessage(event?: any): void {
    /* 
      не отправляется сообщение при нажатии на иконку
    */

    let message: Message = {
      id: 1,
      isMine: true,
      ico: '../assets/img/ZKoQpzcDggWg2ogpkHjR9JnzY9lbPC7wR_gI-BZX5ncn7VOpt-G_a2jJmQBzC4gx.jpg',
      user: 'Андрей Дарий',
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString().slice(0, -3),
      text: event.target.value,
    };

    if (event.target.value.length > 0) {
      this.messages.push(message);
      event.target.value = '';
    }
    return;
  }

  public openContextMenu(event: any): void {
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

  public showRightBar(): void {
    /*
      передавать название канала, аву и тд
    */

    this.openRightBar = !this.openRightBar;
  }

  public scrollAlwaysBottom(): void {
    /* 
      Найти другой способ прокрутки вниз
    */

    const scrollContainer = this.scrollable.nativeElement;
    scrollContainer.scrollTop = scrollContainer.scrollHeight;
  }
}
