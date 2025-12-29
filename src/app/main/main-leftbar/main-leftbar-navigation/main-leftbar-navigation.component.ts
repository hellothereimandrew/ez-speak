import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Folder} from 'src/app/shared/interfaces/folder';
import {StateService} from '../../../shared/services/state.service';
import {User} from '../../../shared/models/user.model';

@Component({
  selector: 'app-main-leftbar-navigation',
  templateUrl: './main-leftbar-navigation.component.html',
  styleUrl: './main-leftbar-navigation.component.scss',
})
export class MainLeftbarNavigationComponent implements OnInit {
  @Input() public userInfo: User = new User();

  @Input() public folderName: string = '';

  @Output() public createFolderEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  public selectedButton: string = '';
  public customFolders: Folder[] = [];
  public defaultFolders: Folder[] = [
    {
      id: 2,
      ico: 'private.svg',
      name: 'Личные сообщения',
    },

    {
      id: 3,
      ico: 'group.svg',
      name: 'Группы',
    },

    {
      id: 4,
      ico: 'group.svg',
      name: 'Каналы',
    },

    {
      id: 5,
      ico: 'notifi.svg',
      name: 'Уведомления',
    },
  ];

  constructor(public stateService: StateService) {}

  ngOnInit(): void {}

  public createNewFolder() {
    this.createFolderEmitter.emit();

    const newFolder: Folder = {
      id: 0,
      ico: '',
      name: this.folderName,
    };

    if (this.defaultFolders.length >= 5) {
      this.customFolders.push(newFolder);
    }
  }

  public onSelect(button: string): void {
    if (this.selectedButton === button) {
      this.selectedButton = '';
    } else {
      this.selectedButton = button;
    }
  }
}
