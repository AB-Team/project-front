import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserFormInput } from '../models/userFormInput';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { User } from '../models/User';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  loginData = new UserFormInput();

  loginForm: FormGroup;

  user: User;

  constructor(private router: Router, private authService: AuthService) {
    this.loginForm = new FormGroup({
      'emailId': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required])
    });
  }

  ngOnInit() {
  }

  onSubmit(){
    this.loginData.setEmailId(this.loginForm.value.emailId);
    this.loginData.setPassword(this.loginForm.value.password);

    // a and a then decide where to navigate.

    this.user = new User(this.loginData.getEmailId(), this.loginData.getEmailId(), this.loginData.getPassword(), true);

    this.authService.setUser(this.user);

    this.router.navigate(['home']);
  }

}
