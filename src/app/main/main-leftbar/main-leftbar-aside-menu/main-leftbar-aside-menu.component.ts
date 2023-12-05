import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-main-leftbar-aside-menu',
  templateUrl: './main-leftbar-aside-menu.component.html',
  styleUrls: ['./main-leftbar-aside-menu.component.scss'],
})
export class MainLeftbarAsideMenuComponent implements OnInit {
  @Output() public hideOptions: EventEmitter<void> = new EventEmitter<void>();
  @Output() public theme: EventEmitter<string> = new EventEmitter<string>();

  public themeName: string = '';
  public fontColor: string = '';
  public fontFamily: string = 'Nunito-Light';

  ngOnInit(): void {}

  public setAppTheme(themeName: string): string {
    localStorage.setItem('theme', themeName);
    this.theme.emit(themeName);

    if (localStorage.getItem('theme') === 'dark-theme') {
      this.themeName = themeName;
      this.fontColor = '#f0f0f0';
    }

    if (localStorage.getItem('theme') === 'light-theme') {
      this.themeName = themeName;
      this.fontColor = '#f0f0f0';
    }

    if (localStorage.getItem('theme') === 'combined-theme') {
      this.themeName = themeName;
      this.fontColor = '#f0f0f0';
    }

    return themeName;
  }
}
