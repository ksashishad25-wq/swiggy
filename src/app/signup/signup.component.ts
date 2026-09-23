import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  standalone: false,
  selector: 'app-signup',
  styleUrls: ['./signup.component.css'],
  template: `
    <main class="auth-page">
      <section class="auth-card auth-card-signup">
        <div class="auth-brand-mark">S</div><p class="auth-kicker">JOIN SWIGGY</p><h1>Create your account</h1><p class="auth-copy">Save favourites, track orders, and discover Bengaluru's best food.</p>
        <form class="auth-form" [formGroup]="form" (ngSubmit)="submit()" novalidate>
          <label><span>Full name</span><input formControlName="name" placeholder="Enter your name" /><small *ngIf="name.touched && name.invalid">Enter at least 3 characters.</small></label>
          <label><span>Phone number</span><input formControlName="phone" type="tel" placeholder="10-digit mobile number" /><small *ngIf="phone.touched && phone.invalid">Enter a valid 10-digit number.</small></label>
          <label><span>Email address</span><input formControlName="email" type="email" placeholder="you@example.com" /><small *ngIf="email.touched && email.invalid">Enter a valid email address.</small></label>
          <label><span>Password</span><input formControlName="password" type="password" placeholder="Minimum 6 characters" /><small *ngIf="password.touched && password.invalid">Password must be at least 6 characters.</small></label>
          <button class="auth-submit" type="submit" [disabled]="form.invalid">Create account</button>
        </form>
        <p class="auth-switch">Already have an account? <a routerLink="/login">Log in</a></p>
      </section>
    </main>
  `,
})
export class SignupComponent {
  readonly form;
  constructor(formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  get name() { return this.form.controls.name; }
  get phone() { return this.form.controls.phone; }
  get email() { return this.form.controls.email; }
  get password() { return this.form.controls.password; }
  submit(): void { this.form.markAllAsTouched(); }
}
