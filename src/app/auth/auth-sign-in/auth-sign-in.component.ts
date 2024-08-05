import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

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

  public showPassword: boolean = false;
  public inputType: string = 'password';

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  public ngOnInit(): void {
    this.getUserInfo();
  }

  public getUserInfo(): void {
    const user: any = JSON.parse(this.authService?.getUser);

    if (user.checked) {
      this.signInData.patchValue(JSON.parse(this.authService?.getUser));
    }
  }

  public isValid(): boolean {
    this.authService.isAuthorized = !this.signInData.invalid;

    return this.authService.isAuthorized;
  }

  public submit(): void {
    if (this.isValid()) {
      this.saveUserInfo();
      this.navigateToApp();
    }

    this.signInData.markAllAsTouched();
  }

  public saveUserInfo(): void {
    this.authService.setUser = JSON.stringify(this.signInData.getRawValue());
  }

  public navigateToApp(): void {
    this.router.navigate([`/main`]);
  }

  public showPass(): void {
    this.showPassword = !this.showPassword;
    this.inputType = this.showPassword ? 'text' : 'password';
  }
}
