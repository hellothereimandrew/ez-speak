import {Component, OnInit} from '@angular/core';
import {AuthService} from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  constructor(protected authService: AuthService) {}

  ngOnInit(): void {
    this.authService.setActiveButton = 'sign-in';
  }
}
