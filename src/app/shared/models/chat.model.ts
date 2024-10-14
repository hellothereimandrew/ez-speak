import {IChat} from '../interfaces/IChat';

export class Chat implements IChat {
  public active: boolean = false;

  public id: number = 0;
  public name: string = '';

  public ico?: string;
  public time?: string;
  public userName?: string;
  public lastMsg?: string;
  public msgs?: number;
  public pinned?: boolean;
}
