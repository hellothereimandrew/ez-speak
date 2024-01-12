import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Subscription} from 'rxjs';
import {DecorationService} from 'src/app/services/decoration.service';
import {Chat} from 'src/app/shared/chat-db';

@Component({
  selector: 'app-main-rightbar',
  templateUrl: './main-rightbar.component.html',
  styleUrls: ['./main-rightbar.component.scss'],
})
export class MainRightbarComponent implements OnInit, OnDestroy {
  @Input() public currentChat: Chat = {
    id: 0,
    ico: '',
    name: '',
  };

  @Output() public rightbarListener: EventEmitter<void> = new EventEmitter<void>();

  public selectedTheme: string = '';
  public hideRightbar: boolean = false;
  public themeSubscription: Subscription = new Subscription();

  constructor(private decoreationServise: DecorationService) {}

  ngOnInit(): void {
    this.themeSubscription = this.decoreationServise.selectedTheme$.subscribe((theme) => {
      this.selectedTheme = theme;
    });
  }

  public showRightbar(): void {
    this.hideRightbar = !this.hideRightbar;
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
