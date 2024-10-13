import {Injectable} from '@angular/core';
import {User} from '../../shared/models/user.model';
import {IChat} from '../../shared/interfaces/IChat';

@Injectable()
export class MainRightbarService {
  public userData!: User;
  public chatData!: IChat;
}
