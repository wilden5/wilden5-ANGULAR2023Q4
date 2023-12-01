import { Component, DestroyRef } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { merge } from 'rxjs';
import {
  customPasswordValidationMessages,
  customPasswordValidator,
} from '../../validators/password.validator';
import { ProjectPages } from '../../../../environment/environment';
import { loginUser } from '../../../redux/actions/user.actions';
import { IUser } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  protected readonly customPasswordValidationMessages = customPasswordValidationMessages;

  protected readonly ProjectPages = ProjectPages;

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, customPasswordValidator]],
  });

  constructor(
    private fb: FormBuilder,
    protected userService: UserService,
    private destroyRef: DestroyRef,
    private store: Store
  ) {
    merge(this.email.valueChanges, this.password.valueChanges)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => this.userService.isExceptionSubject.next(false));
  }

  get email(): AbstractControl {
    return this.loginForm.get('email')!;
  }

  get password(): AbstractControl {
    return this.loginForm.get('password')!;
  }

  onSubmitLoginForm(): void {
    this.userService.isExceptionSubject.next(true);
    this.store.dispatch(loginUser({ user: this.loginForm.value as IUser }));
  }
}
