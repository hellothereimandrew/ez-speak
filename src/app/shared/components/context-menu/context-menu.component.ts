import {Component, Injectable} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  standalone: true,
  selector: 'context-menu',
  templateUrl: './context-menu.component.html',
  styleUrl: './context-menu.component.scss',
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
})
@Injectable()
export class ContextMenuComponent {
  public hideContextMenu: boolean = true;

  public menu: any = {
    main: [],
    primary: [],
    positionX: 0,
    positionY: 0,
  };

  public openContextMenu(event: MouseEvent): void {
    event.stopPropagation();
    event.preventDefault();

    this.menu.positionX = event.clientX - 10;
    this.menu.positionY = event.clientY - 10;
    this.hideContextMenu = false;
  }

  public closeContextMenu(): void {
    this.hideContextMenu = true;
    this.menu.main = [];
    this.menu.primary = [];
  }
}
