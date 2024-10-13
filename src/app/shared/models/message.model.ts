import {IMessage} from '../interfaces/IMessages';
import {User} from './user.model';

export class Message implements IMessage {
  public date: string = '';
  public ico: string = '';
  public id: number = 0;
  public isMine: boolean = false;
  public text: string = '';
  public time: string = '';
  public user: User = new User();
}
