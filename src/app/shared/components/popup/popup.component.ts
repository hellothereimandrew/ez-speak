import {Component, Input} from '@angular/core';
import {PopupService} from 'src/app/shared/services/popup.service';

@Component({
  selector: 'popup',
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.scss',
})
export class PopupComponent {
  @Input() public showPopup: boolean = false;

  @Input() public popupData: {
    message: string;
    firstButton: string;
    secondButton: string;
    confirmed: boolean;
    canceled: boolean;
  } = {
    message: '',
    firstButton: '',
    secondButton: '',
    confirmed: false,
    canceled: false,
  };

  constructor(public popupService: PopupService) {}
}
