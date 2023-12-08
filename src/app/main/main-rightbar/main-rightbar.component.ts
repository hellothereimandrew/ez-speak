import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DecorationService} from 'src/app/services/decoration.service';
import {Chat} from 'src/app/shared/chat-db';

@Component({
  selector: 'app-main-rightbar',
  templateUrl: './main-rightbar.component.html',
  styleUrls: ['./main-rightbar.component.scss'],
})
export class MainRightbarComponent implements OnInit {
  constructor(private decoreationServise: DecorationService) {}

  @Input() currentChat: Chat = {
    id: 0,
    ico: '',
    name: '',
  };

  @Output() rightbarListener: EventEmitter<void> = new EventEmitter<void>();

  public hideRightbar: boolean = false;

  ngOnInit(): void {}

  public showRightbar(): void {
    this.hideRightbar = !this.hideRightbar;
  }

  public a(): void {}
}
