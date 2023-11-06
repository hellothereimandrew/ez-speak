import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  public buttons: string[] = ['sign-in', 'sign-up'];
  public selectedButton: string = '';
  public alwaysSelected: boolean = true;

  constructor() {}

  public onSelect(button: string, alwaysSelected: boolean = true): void {
    if (this.selectedButton === button) {
      this.selectedButton = '';
    } else {
      this.selectedButton = button;
    }
  }
}
