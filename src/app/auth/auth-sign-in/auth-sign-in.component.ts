import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-auth-sign-in',
  templateUrl: './auth-sign-in.component.html',
  styleUrls: ['./auth-sign-in.component.scss'],
})
export class AuthSignInComponent implements OnInit {
  public signInData: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    checked: new FormControl(false),
  });

  public hide: boolean = true;
  public type: string = 'password';

  constructor(private authService: AuthService) {}

  public ngOnInit(): void {
    this.getUserInfo();
  }

  public getUserInfo(): void {
    this.signInData.patchValue(JSON.parse(this.authService?.getUser));
  }

  public isValid(): boolean {
    if (this.signInData.invalid) {
      this.authService.isAuthorized = false;
      return false;
    } else {
      this.authService.isAuthorized = true;
      return true;
    }
  }

  public submit(): void {
    this.signInData.markAllAsTouched();

    if (!this.isValid()) {
      return;
    } else {
      this.saveUserInfo();
    }
  }

  public saveUserInfo(): void {
    const user: any = this.signInData.getRawValue();

    if (user.checked) {
      this.authService.setUser = JSON.stringify(user);
    } else {
      this.signInData.reset();
      this.authService.setUser = '';
      localStorage.removeItem('currentUser');
    }
  }

  public showPass(): void {
    this.hide = !this.hide;
    if (this.hide) {
      this.type = 'password';
    } else {
      this.hide = false;
      this.type = 'text';
    }
  }
}
