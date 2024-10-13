import {User} from '../models/user.model';

export interface IMessage {
  id: number;
  ico?: string;
  user: User;
  date: string;
  time: string;
  text: string;
  isMine: boolean;
  pinned?: boolean;
  picked?: boolean;
}
