import {Component} from '@angular/core';
import {ContextMenuService} from './context-menu.service';

@Component({
  selector: 'context-menu',
  templateUrl: './context-menu.component.html',
  styleUrl: './context-menu.component.scss',
})
export class ContextMenuComponent {
  public hideContextMenu: boolean = true;
  public contextMenuPosition: {x: number; y: number} = {
    x: 0,
    y: 0,
  };

  constructor(public contextMenuService: ContextMenuService) {}

  public openContextMenu(event: MouseEvent): void {
    event.preventDefault();
    this.hideContextMenu = false;
    this.contextMenuPosition = {
      x: event.clientX - 10,
      y: event.clientY - 10,
    };
  }

  public closeContextMenu(): void {
    this.hideContextMenu = true;
    this.contextMenuService.primaryMenuItems = [];
  }
}
