import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-auth-sign-up',
  templateUrl: './auth-sign-up.component.html',
  styleUrls: ['./auth-sign-up.component.scss'],
})
export class AuthSignUpComponent {
  public signUpData: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  public isAuthorized: boolean = false;
  public showPassword: boolean = false;
  public showPasswordConfirm: boolean = false;
  public passInputType: string = 'password';
  public passConfirmInputType: string = 'password';

  constructor(private authService: AuthService) {}

  public isValid(): boolean {
    return !this.signUpData.invalid;
  }

  public submit(): void {
    if (!this.isValid()) {
      this.isAuthorized = false;
      this.signUpData.markAllAsTouched();
    } else {
      this.setUser();
      this.isAuthorized = true;
      this.authService.setActiveButton = 'sign-in';
    }
  }

  public setUser(): void {
    // this.authService.setUser = this.signUpData.getRawValue();
  }

  public showPass(): void {
    this.showPassword = !this.showPassword;
    this.passInputType = this.showPassword ? 'text' : 'password';
  }

  public showPassConfirm(): void {
    this.showPasswordConfirm = !this.showPasswordConfirm;
    this.passConfirmInputType = this.showPasswordConfirm ? 'text' : 'password';
  }
}
