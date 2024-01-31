import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DecorationService} from 'src/app/shared/services/decoration.service';

@Component({
  selector: 'app-main-leftbar-aside-menu',
  templateUrl: './main-leftbar-aside-menu.component.html',
  styleUrls: ['./main-leftbar-aside-menu.component.scss'],
})
export class MainLeftbarAsideMenuComponent implements OnInit {
  @Output() public hideOptions: EventEmitter<void> = new EventEmitter<void>();

  constructor(private decoreationServise: DecorationService) {}

  ngOnInit(): void {}

  public setAppTheme(currentTheme: string): void {
    this.decoreationServise.selectedTheme = currentTheme;
  }
}
