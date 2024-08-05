import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {DecorationService} from 'src/app/shared/services/decoration.service';
import {Chat} from 'src/app/shared/interfaces/chat-db';
import {StateService} from '../../shared/services/state.service';

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

  public selectedTheme: string = '';
  public themeSubscription: Subscription = new Subscription();

  constructor(
    public stateService: StateService,
    public decorationService: DecorationService,
  ) {}

  ngOnInit(): void {
    this.themeSubscription = this.decorationService.selectedTheme$.subscribe((theme: string): void => {
      this.selectedTheme = theme;
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
