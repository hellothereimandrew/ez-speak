import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable()
export class DecorationService {
  private currentTheme: BehaviorSubject<string> = new BehaviorSubject<string>(localStorage.getItem('theme') || '');

  private currentBackground: BehaviorSubject<string> = new BehaviorSubject<string>(localStorage.getItem('image') || '');

  public get selectedTheme$(): Observable<string> {
    return this.currentTheme.asObservable();
  }

  public set selectedTheme(theme: string) {
    this.currentTheme.next(theme);
    localStorage.setItem('theme', theme);
  }

  public get selectedImage$(): Observable<string> {
    return this.currentBackground.asObservable();
  }

  public set selectedImage(image: string) {
    this.currentBackground.next(image);
    localStorage.setItem('image', image);
  }
}
