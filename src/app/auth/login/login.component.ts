import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Subscription, tap } from 'rxjs';
import { PASSWORD_FORMAT, PASSWORD_PATTERNS } from '../constants/patterns';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  passPatterns = PASSWORD_PATTERNS;
  existsLowercase?: boolean;
  existsUppercase?: boolean;
  existsDigit?: boolean;
  existsSpecialChar?: boolean;
  validLength?: boolean;

  private subscription = new Subscription();
  private horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  private verticalPosition: MatSnackBarVerticalPosition = 'top';
  private durationInSeconds = 3;

  constructor(private formBuilder: FormBuilder, private snackBar: MatSnackBar) {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.pattern(PASSWORD_FORMAT.PATTERN)]]
    });
  }

  ngOnInit(): void {
    this.validatePassword();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  validatePassword() {
    this.subscription.add(this.loginForm.get("password")?.valueChanges.pipe(
      tap((response: string) => {

        this.resetVariables();
        if (this.checkPattern(this.passPatterns.LOWER_CASE)) {
          this.existsLowercase = true;
        }
        if (this.checkPattern(this.passPatterns.UPPER_CASE)) {
          this.existsUppercase = true;
        }
        if (this.checkPattern(this.passPatterns.SPECIAL_CHARS)) {
          this.existsSpecialChar = true;
        }
        if (this.checkPattern(this.passPatterns.DIGITS)) {
          this.existsDigit = true;
        }
        if (response.length >= 12) {
          this.validLength = true;
        }
      })
    ).subscribe());
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.snackBar.open("Login Success", 'Close', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        duration: this.durationInSeconds * 1000,
        panelClass: 'green-snackbar'
      });
    }
  }

  private checkPattern(regex: PASSWORD_PATTERNS) {
    return RegExp(regex).test(this.loginForm.get("password")?.value)
  }

  private resetVariables(){
    this.existsLowercase = false;
    this.existsUppercase = false;
    this.validLength = false;
    this.existsDigit = false;
    this.existsSpecialChar = false;
  }

}
