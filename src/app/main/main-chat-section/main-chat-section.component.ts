import {AfterViewChecked, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Subject, Subscription, take, takeUntil} from 'rxjs';
import {DecorationService} from 'src/app/shared/services/decoration.service';
import {Chat} from 'src/app/shared/interfaces/chat-db';
import {Message} from 'src/app/shared/interfaces/messages-db';
import {StateService} from '../../shared/services/state.service';
import {ContextMenuService} from '../../shared/components/context-menu/context-menu.service';
import {ContextMenuComponent} from '../../shared/components/context-menu/context-menu.component';

@Component({
  selector: 'app-main-chat-section',
  templateUrl: './main-chat-section.component.html',
  styleUrls: ['./main-chat-section.component.scss'],
  providers: [ContextMenuService],
})
export class MainChatSectionComponent implements OnInit, OnDestroy, AfterViewChecked {
  @Input() public currentChat: Chat = {
    id: 0,
    ico: '',
    name: '',
  };

  @ViewChild('scrollable') public scrollable!: ElementRef;
  @ViewChild('contextMenu') public contextMenu!: ContextMenuComponent;

  public selectedTheme: string = '';
  public selectedBackground: string = '';
  public hideDropdown: boolean = true;
  public messages: Message[] = [];
  public themeSubscription: Subscription = new Subscription();
  public backgroundSubscription: Subscription = new Subscription();
  public unsubscribe: Subject<void> = new Subject();

  constructor(
    public stateService: StateService,
    public decorationServise: DecorationService,
    private contextMenuService: ContextMenuService,
  ) {}

  ngOnInit(): void {
    this.themeSubscription = this.decorationServise.selectedTheme$.pipe(take(1)).subscribe((theme: string): void => {
      this.selectedTheme = theme;
    });

    this.backgroundSubscription = this.decorationServise.selectedImage$
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((image) => {
        this.selectedBackground = image;
      });
  }

  ngAfterViewChecked() {
    // this.scrollClaimedToBottom();
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
    this.backgroundSubscription.unsubscribe();
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
    this.contextMenu.openContextMenu(event);
    this.generateMainContextItems();
  }

  public openDropdown(): void {
    this.hideDropdown = false;
  }

  public openRightBar(): void {
    this.stateService.openRightbar = true;
  }

  public closeAll(): void {
    this.closeDropdown();
    this.contextMenu.closeContextMenu();
    this.stateService.openRightbar = false;
  }

  public closeDropdown(): void {
    this.hideDropdown = true;
  }

  public generateMainContextItems(): void {
    this.contextMenuService.mainMenuItems = [
      {
        name: 'Выбрать',
        method: () => void {},
      },
      {
        name: 'Ответить',
        method: () => void {},
      },
      {
        name: 'Переслать',
        method: () => void {},
      },
      {
        name: this.stateService.showPinnedMsg ? 'Открепить' : 'Закрепить',
        method: (): void => {
          this.stateService.showPinnedMsg
            ? (this.stateService.showPinnedMsg = false)
            : (this.stateService.showPinnedMsg = true);
        },
      },
      {
        name: 'Изменить',
        method: () => void {},
      },
      {
        name: 'Удалить',
        method: () => void {},
      },
    ];
  }

  public scrollClaimedToBottom(): void {
    const scrollContainer = this.scrollable.nativeElement;
    scrollContainer.scrollTop = scrollContainer.scrollHeight;
  }
}
