import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import {User} from '../../shared/models/user.model';

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

  public userData: User = new User();
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
    if (this.authService.getUser) {
      this.signInData.patchValue(JSON.parse(this.authService?.getUser));
      this.signInData.controls['checked'].setValue(true);
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
    this.userData.id = 0;
    this.userData.name = this.signInData.controls['name'].value;
    this.userData.ico = '../assets/img/6YpRjbulh1Q.jpg';

    this.authService.setUser(this.userData);
  }

  public navigateToApp(): void {
    this.router.navigate([`/main`]);
  }

  public showPass(): void {
    this.showPassword = !this.showPassword;
    this.inputType = this.showPassword ? 'text' : 'password';
  }
}
