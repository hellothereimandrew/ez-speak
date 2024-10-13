export interface IChat {
  id: number;
  ico?: string;
  name: string;
  time?: string;
  userName?: string;
  lastMsg?: string;
  msgs?: number;
  pinned?: boolean;
}
