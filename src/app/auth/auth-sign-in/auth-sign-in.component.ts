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
    name: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  public hide: boolean = true;
  public isAutorized: boolean = false;
  public checked: boolean = false;
  public type: string = 'password';

  constructor(private authService: AuthService) {}

  public ngOnInit(): void {
    this.getUserInfo();
  }

  public getUserInfo(): void {
    this.checked = this.authService.checked;

    if (this.checked) {
      this.signInData.patchValue(JSON.parse(this.authService.getUser));
    }
  }

  public isValid(): boolean {
    let formIsValid: boolean = true;

    if (this.signInData.invalid) {
      if (this.signInData.controls['name'].invalid || this.signInData.controls['password'].invalid) {
        formIsValid = false;
      }

      return formIsValid;
    }

    return formIsValid;
  }

  public submit(): void {
    if (!this.isValid()) {
      this.isAutorized = false;
    } else {
      this.isAutorized = true;
      this.signInData.reset();
    }
    this.setUser();
  }

  public setUser(): void {
    this.authService.checked = this.checked;
    this.authService.setUser = JSON.stringify(this.signInData.getRawValue());
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
