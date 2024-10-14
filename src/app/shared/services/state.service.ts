import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  /** leftbar states **/
  public hideNotifications: boolean = true;
  public hideOptions: boolean = true;
  public hideChatSection: boolean = true;
  public showNavbar: boolean = false;
  public showControls: boolean = false;
  public showSearch: boolean = false;
  public isResized: boolean = false;
  /** chat-section states **/
  public isPrivate: boolean = false;
  public openRightbar: boolean = false;
  public showPinnedMsg: boolean = false;
}
