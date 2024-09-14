import {Component, HostListener, Input, OnDestroy, OnInit} from '@angular/core';
import {Chat} from 'src/app/shared/interfaces/chat-db';
import {DecorationService} from '../shared/services/decoration.service';
import {Subscription} from 'rxjs';
import {User} from '../shared/interfaces/user';
import {StateService} from '../shared/services/state.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit, OnDestroy {
  @Input() folderName: string = '';

  @Input() public user: User = {
    id: 0,
    ico: '',
    name: '',
    role: '',
    status: '',
  };

  @Input() public currentChat: Chat = {
    id: 0,
    ico: '',
    name: '',
  };

  public hideFolderPopup: boolean = true;
  public selectedTheme: string = '';
  public themeSubscription: Subscription = new Subscription();

  constructor(
    public stateService: StateService,
    private decorationService: DecorationService,
  ) {}

  @HostListener('window:keyup', ['$event'])
  public setHotkeys(event: KeyboardEvent): void {
    event.preventDefault();

    if (!this.stateService.hideChatSection && event.code === 'Escape') {
      this.stateService.hideChatSection = true;
      this.stateService.openRightbar = false;
    }
  }

  ngOnInit(): void {
    this.themeSubscription = this.decorationService.selectedTheme$.subscribe((theme: string): void => {
      this.selectedTheme = theme;
    });
  }

  ngOnDestroy(): void {
    this.setDefaultState();
    this.themeSubscription.unsubscribe();
  }

  public getCurrentChat(chat: Chat): void {
    this.currentChat = chat;
  }

  public getFolderName(folderName: string): void {
    this.folderName = folderName;
  }

  public showFolderPopup(): void {
    this.hideFolderPopup = !this.hideFolderPopup;
  }

  public setDefaultState(): void {
    this.stateService.hideNotifications = true;
    this.stateService.hideOptions = true;
    this.stateService.hideChatSection = true;
    this.stateService.showControls = false;
    this.stateService.showSearch = false;

    this.stateService.isPrivate = false;
    this.stateService.openRightbar = false;
    this.stateService.showPinnedMsg = false;
  }

  public cancelDefaultActions(mouseEvent: MouseEvent): void {
    mouseEvent.preventDefault();
    mouseEvent.stopPropagation();
  }
}
