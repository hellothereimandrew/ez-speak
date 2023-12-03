import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-auth-sign-up',
  templateUrl: './auth-sign-up.component.html',
  styleUrls: ['./auth-sign-up.component.scss'],
})
export class AuthSignUpComponent implements OnInit {
  public isAutorized: boolean = false;

  ngOnInit(): void {}

  signUpData: FormGroup = new FormGroup({
    login: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  public isValid(): boolean {
    let formIsValid: boolean = true;

    if (this.signUpData.invalid) {
      if (this.signUpData.controls['login'].invalid) {
        formIsValid = false;
        return false;
      }
      if (this.signUpData.controls['password'].invalid) {
        formIsValid = false;
        return false;
      }
      if (this.signUpData.controls['confirmPassword'].invalid) {
        formIsValid = false;
        return false;
      }
      if (this.signUpData.controls['email'].invalid) {
        formIsValid = false;
        return false;
      }
    }
    formIsValid = true;
    return true;
  }

  public submit(): void {
    if (!this.isValid()) {
      this.isAutorized = false;
    } else {
      this.isAutorized = true;
      this.signUpData.reset();
    }
  }
}
