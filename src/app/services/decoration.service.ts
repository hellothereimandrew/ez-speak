import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DecorationService {
  public fontFamily: string = '';
  public fontColor: string = '';
  public currentTheme: string = '';

  public setAppTheme(currentTheme: string): string {
    localStorage.setItem('theme', currentTheme);

    if (localStorage.getItem('theme') === 'dark-theme') {
      this.currentTheme = currentTheme;
      this.fontFamily = 'Nunito-Light';
      this.fontColor = '#f0f0f0';
    }

    if (localStorage.getItem('theme') === 'light-theme') {
      this.currentTheme = currentTheme;
      this.fontFamily = 'Nunito-Light';
      this.fontColor = '#f0f0f0';
    }

    if (localStorage.getItem('theme') === 'combined-theme') {
      this.currentTheme = currentTheme;
      this.fontFamily = 'Nunito-Light';
      this.fontColor = '#f0f0f0';
    }

    return currentTheme;
  }
}
