import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-auth-sign-up',
  templateUrl: './auth-sign-up.component.html',
  styleUrls: ['./auth-sign-up.component.scss'],
})
export class AuthSignUpComponent implements OnInit {
  public signUpData: FormGroup = new FormGroup({
    name: new FormControl('1', Validators.required),
    password: new FormControl('111111', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('111111', [Validators.required, Validators.minLength(6)]),
    email: new FormControl('1@a.ru', [Validators.required, Validators.email]),
  });

  public isAuthorized: boolean = false;
  public selectedButton: string = '';

  constructor(private authService: AuthService) {}

  public ngOnInit() {}

  public isValid(): boolean {
    return !this.signUpData.invalid;
  }

  public submit(): void {
    if (!this.isValid()) {
      this.isAuthorized = !this.signUpData.invalid;
    } else {
      this.setUser();
      this.isAuthorized = !this.signUpData.invalid;
    }
  }
}
