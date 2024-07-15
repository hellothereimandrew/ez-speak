import {Injectable} from '@angular/core';
import {User} from '../shared/interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public checked: boolean = false;
  public user!: User;

  public get getUser(): string {
    return localStorage.getItem('currentUser') || '';
  }

  public set setUser(user: string) {
    localStorage.setItem('currentUser', user);
  }
}
