import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DecorationService} from 'src/app/services/decoration.service';
import {Chat} from 'src/app/shared/chat-db';

@Component({
  selector: 'app-main-rightbar',
  templateUrl: './main-rightbar.component.html',
  styleUrls: ['./main-rightbar.component.scss'],
})
export class MainRightbarComponent implements OnInit {
  @Input() currentChat: Chat = {
    id: 0,
    ico: '',
    name: '',
  };

  @Output() rightbarListener: EventEmitter<void> = new EventEmitter<void>();

  public selectedTheme: string = '';
  public hideRightbar: boolean = false;

  constructor(private decoreationServise: DecorationService) {}

  ngOnInit(): void {
    this.getAppTheme();
  }

  public getAppTheme(): void {
    this.selectedTheme = this.decoreationServise.getAppTheme();
  }

  public showRightbar(): void {
    this.hideRightbar = !this.hideRightbar;
  }

  public a(): void {}
}
