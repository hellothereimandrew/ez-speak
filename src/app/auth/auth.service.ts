import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {User} from '../shared/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public isAuthorized: boolean = false;
  public selectedButton: string = '';

  public get getUser(): string {
    return localStorage.getItem('currentUser') || '';
  }

  public set setActiveButton(button: string) {
    this.selectedButton = button;
  }

  public setUser(user: User): void {
    localStorage.setItem('currentUser', JSON.stringify(user));
  }

  public canActivate: CanActivateFn = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean> | Promise<boolean> | boolean => {
    return this.isAuthorized;
  };
}
