import {Component} from '@angular/core';
import {DecorationService} from 'src/app/shared/services/decoration.service';
import {StateService} from '../../../shared/services/state.service';

@Component({
  selector: 'app-main-leftbar-aside-menu',
  templateUrl: './main-leftbar-aside-menu.component.html',
  styleUrls: ['./main-leftbar-aside-menu.component.scss'],
})
export class MainLeftbarAsideMenuComponent {
  public selectedTheme: string = '';

  constructor(
    public stateService: StateService,
    private decorationService: DecorationService,
  ) {}

  public setAppTheme(currentTheme: string): void {
    this.decorationService.selectedTheme = currentTheme;
    this.selectedTheme = currentTheme;
  }

  public setBackground(event?: any): void {
    const fileName: string = event.target?.files[0]?.name;
    this.decorationService.selectedImage = `../../assets/img/${fileName}`;
  }
}
