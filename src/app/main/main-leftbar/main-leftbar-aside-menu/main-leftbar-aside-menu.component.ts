import {Component, EventEmitter, Output} from '@angular/core';
import {DecorationService} from 'src/app/shared/services/decoration.service';

@Component({
  selector: 'app-main-leftbar-aside-menu',
  templateUrl: './main-leftbar-aside-menu.component.html',
  styleUrls: ['./main-leftbar-aside-menu.component.scss'],
})
export class MainLeftbarAsideMenuComponent {
  @Output() public hideOptions: EventEmitter<void> = new EventEmitter<void>();

  constructor(private decoreationServise: DecorationService) {}

  public setAppTheme(currentTheme: string): void {
    this.decoreationServise.selectedTheme = currentTheme;
  }

  public setBackground(event: any): void {
    const fileName: string = event.target.files[0].name;
    this.decoreationServise.selectedImage = `../../assets/img/${fileName}`;
  }
}
