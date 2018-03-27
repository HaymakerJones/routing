import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message: string;
  loginForm: FormGroup;
  loginStatus = false;

  constructor(public as: AuthorizationService, private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      user: ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(10)])],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.message = '';
    this.loginStatus = this.as.isLoggedIn();
  }

  login(f: any): boolean {
    this.message = '';
    if (!this.as.login(f.user, f.password)) {
      this.message = 'Incorrect credentials';
      setTimeout(() => { this.message = ''; }, 2000);
      return false;
    }
    else {
      this.message = 'Success!Y';
      setTimeout(() => { this.message = ''; }, 2000);
      return true;
    }

  }

  logout(): boolean {
    this.as.logout();
    this.loginStatus = false;
    return false;
  }


}
