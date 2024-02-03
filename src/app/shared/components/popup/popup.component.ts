import {Component, Input} from '@angular/core';
import {PopupData} from '../../interfaces/popup-data';

@Component({
  selector: 'popup',
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.scss',
})
export class PopupComponent {
  @Input() public showPopup: boolean = false;

  @Input() public popupData: PopupData = {
    message: '',
    firstButton: '',
    secondButton: '',
    confirmed: () => {},
  };

  public confirmed(): void {
    if (this.popupData.confirmed) {
      this.popupData.confirmed();
      this.showPopup = false;
    }

    this.showPopup = false;
  }
}
