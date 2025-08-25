import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { Store, on } from '@ngrx/store';
import { authActions } from '../../ngrx/session/auth.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  imports: [MatCardModule, MatFormFieldModule, CommonModule, MatButtonModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})

export class Login {
  loginForm: FormGroup;
  userAuthenticated$!: Observable<any>;

  constructor(
    private fb: FormBuilder,
    private store: Store<{ usersLogin: any }> // Adjust the type as per your state structure
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
    // Subscribe to the user authentication state
    this.userAuthenticated$ = this.store.select(state => state.usersLogin);
    this.userAuthenticated$.subscribe(user => {
      if (user && user.user) {
        console.log('User is authenticated:', user.user);
      } else {
        console.log('User is not authenticated');
      }
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      // Aquí va la lógica de autenticación
      const { username, password } = this.loginForm.value;
      this.store.dispatch(authActions.loginSuccess(username, password));
    } else {
      console.log(this.loginForm.value);
    }
  }
}
