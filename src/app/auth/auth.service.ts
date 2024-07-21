import {Injectable} from '@angular/core';
import {User} from '../shared/interfaces/user';
import {ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public isAuthorized: boolean = false;
  public user!: User;

  public get getUser(): string {
    return localStorage.getItem('currentUser') || '';
  }

  public set setUser(user: string) {
    localStorage.setItem('currentUser', user);
  }

  public canActivate: CanActivateFn = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean> | Promise<boolean> | boolean => {
    return this.isAuthorized;
  };
}
