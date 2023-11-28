import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-main-leftbar-aside-menu',
  templateUrl: './main-leftbar-aside-menu.component.html',
  styleUrls: ['./main-leftbar-aside-menu.component.scss'],
})
export class MainLeftbarAsideMenuComponent implements OnInit {
  @Output() public hideOptions: EventEmitter<void> = new EventEmitter<void>();

  public activeTheme: boolean = false;
  public fontFamily: string = 'Nunito-Light';
  public themeName: string = 'dark-theme';

  ngOnInit(): void {}

  public setAppTheme(themeName: string = 'dark-theme'): string {
    localStorage.setItem('theme', themeName);

    if (localStorage.getItem('theme') === 'dark-theme') {
      themeName = 'dark-theme';
    }

    if (localStorage.getItem('theme') === 'light-theme') {
      themeName = 'light-theme';
    }

    if (localStorage.getItem('theme') === 'combined-theme') {
      themeName = 'combined-theme';
    }

    return themeName;
  }
}
