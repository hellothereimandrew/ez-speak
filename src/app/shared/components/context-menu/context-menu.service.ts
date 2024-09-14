import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContextMenuService {
  public mainMenuItems: Array<{name: string; method: () => any}> = [];
  public primaryMenuItems: Array<{name: string; method: () => any}> = [];
}
