import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Users } from 'src/app/shared/users-db';

@Component({
  selector: 'app-auth-sign-in',
  templateUrl: './auth-sign-in.component.html',
  styleUrls: ['./auth-sign-in.component.scss'],
})
export class AuthSignInComponent implements OnInit {
  public hide: boolean = true;
  public type: string = 'password';
  public isAutorized: boolean = false;
  public user: Users = {
    id: 0,
    ico: '',
    name: '',
    role: '',
  };

  ngOnInit(): void {}

  signInData: FormGroup = new FormGroup({
    login: new FormControl('', [Validators.required]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    checked: new FormControl(false),
  });

  public showPass(): void {
    this.hide = !this.hide;
    if (this.hide) {
      this.type = 'password';
    } else {
      this.hide = false;
      this.type = 'text';
    }
  }

  public isValid(): boolean {
    let formIsValid: boolean = true;

    if (this.signInData.invalid) {
      if (this.signInData.controls['login'].invalid) {
        formIsValid = false;
      }

      if (this.signInData.controls['password'].invalid) {
        formIsValid = false;
      }

      return false;
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
  }
}
