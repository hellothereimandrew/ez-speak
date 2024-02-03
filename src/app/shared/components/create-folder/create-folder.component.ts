import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'create-folder',
  templateUrl: './create-folder.component.html',
  styleUrl: './create-folder.component.scss',
})
export class CreateFolderComponent {
  @Input() public hideFolderPopup: boolean = true;

  @Output() public folderNameEmitter: EventEmitter<string> = new EventEmitter<string>();

  public folderName: string = 'Новая папка';

  public emitFolder(): void {
    this.folderNameEmitter.emit(this.folderName);
    this.hideFolderPopup = false;
  }
}
