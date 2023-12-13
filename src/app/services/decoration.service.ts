import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DecorationService {
  public setAppTheme(themeName: string): void {
    localStorage.setItem('theme', themeName);
  }

  public getAppTheme(): string {
    return localStorage.getItem('theme');
  }
}
