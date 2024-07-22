import {Component, OnInit} from '@angular/core';
import {AuthService} from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  public selectedButton: string = '';

  constructor(public authService: AuthService) {}

  ngOnInit() {
    this.onSelect('sign-in');
  }

  public onSelect(button: string): void {
    this.selectedButton = button;
    this.authService.setActiveButton = button;
  }
}
