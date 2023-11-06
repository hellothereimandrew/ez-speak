import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Chat } from 'src/app/shared/chat-db';

@Component({
  selector: 'app-main-rightbar',
  templateUrl: './main-rightbar.component.html',
  styleUrls: ['./main-rightbar.component.scss'],
})
export class MainRightbarComponent implements OnInit {
  @Output() rightbarListener: EventEmitter<void> = new EventEmitter();
  @Input() currentChat: Chat = {
    id: 0,
    ico: '',
    name: '',
  };

  public hideRightbar: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  public showRightbar(): void {
    this.hideRightbar = !this.hideRightbar;
  }

  public a(): void {}
}
