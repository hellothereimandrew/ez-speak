import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DecorationService {
  private currentTheme = new BehaviorSubject<string>(localStorage.getItem('theme') || '');

  public get selectedTheme$(): Observable<string> {
    return this.currentTheme.asObservable();
  }

  public set selectedTheme(theme: string) {
    this.currentTheme.next(theme);
    localStorage.setItem('theme', theme);
  }
}
