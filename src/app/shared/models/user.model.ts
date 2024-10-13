import {IUser} from '../interfaces/IUser';

export class User implements IUser {
  public id: number = 0;
  public ico?: string = '';
  public name: string = '';
  public role?: string = '';
}
