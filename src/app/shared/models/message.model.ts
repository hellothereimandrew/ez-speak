import {IMessage} from '../interfaces/IMessages';
import {User} from './user.model';

export class Message implements IMessage {
  public id: number = 0;
  public ico: string = '';
  public user: User = new User();
  public date: string = '';
  public time: string = '';
  public text: string = '';
  public isMine: boolean = false;

  public pinned?: boolean = false;
  public picked?: boolean = false;
}
