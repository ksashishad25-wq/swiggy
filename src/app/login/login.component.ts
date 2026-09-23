import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

export const passwordMatchValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const password = control.get('password')?.value;
  const confirmPassword = control.get('confirmPassword');
  if (!confirmPassword) return null;
  if (password !== confirmPassword.value) {
    confirmPassword.setErrors({ ...(confirmPassword.errors ?? {}), passwordMismatch: true });
    return { passwordMismatch: true };
  }
  if (confirmPassword.hasError('passwordMismatch')) {
    const errors = { ...(confirmPassword.errors ?? {}) };
    delete errors['passwordMismatch'];
    confirmPassword.setErrors(Object.keys(errors).length ? errors : null);
  }
  return null;
};

@Component({
  standalone: false,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  registerMode = false;
  submitted = false;
  successMessage = '';
  otpVisible = false;
  readonly loginForm;
  readonly signupForm;

  constructor(formBuilder: FormBuilder) {
    this.loginForm = formBuilder.group({ phone: ['', [Validators.required, Validators.pattern('^[6-9][0-9]{9}$')]] });
    this.signupForm = formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[6-9][0-9]{9}$')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
      referralCode: [''],
    }, { validators: passwordMatchValidator });
  }

  get loginPhone() { return this.loginForm.controls.phone; }
  get name() { return this.signupForm.controls.name; }
  get email() { return this.signupForm.controls.email; }
  get signupPhone() { return this.signupForm.controls.phone; }
  get password() { return this.signupForm.controls.password; }
  get confirmPassword() { return this.signupForm.controls.confirmPassword; }

  toggleMode(register: boolean): void {
    this.registerMode = register;
    this.submitted = false;
    this.successMessage = '';
    this.otpVisible = false;
  }

  submit(): void {
    this.submitted = true;
    const form = this.registerMode ? this.signupForm : this.loginForm;
    if (form.invalid) { form.markAllAsTouched(); return; }
    const user = this.registerMode ? this.name.value : this.loginPhone.value;
    this.successMessage = `${this.registerMode ? 'Welcome' : 'Logged in as'} ${user} (Bengaluru Area)`;
    this.otpVisible = true;
  }
}
