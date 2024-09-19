import {Component, EventEmitter, Input, Output} from '@angular/core';
import {PopupData} from '../../interfaces/popup-data';

@Component({
  selector: 'popup',
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.scss',
})
export class PopupComponent {
  @Input() public popupData: PopupData = {
    message: '',
    firstButton: '',
    secondButton: '',
    confirmed: (): void => {},
  };
  @Input() public showPopup: boolean = false;

  @Output() public showPopupChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  public confirmed(): void {
    if (this.popupData.confirmed) {
      this.popupData.confirmed();
      this.showPopup = false;
    }

    this.showPopup = false;
    this.showPopupChange.emit(this.showPopup);
  }
}
