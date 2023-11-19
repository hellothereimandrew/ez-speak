export interface Message {
  id: number;
  ico: string;
  user: string;
  date: string;
  time: string;
  text: string;
  isMine: boolean;
  pinned?: boolean;
}
