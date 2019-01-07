import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserFormInput } from '../models/userFormInput';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { User } from '../models/User';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  loginData = new UserFormInput();

  loginForm: FormGroup;

  user: User;

  constructor(private router: Router, private authService: AuthService, private http: HttpClient) {
    this.loginForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required])
    });
  }

  ngOnInit() {
  }

  onSubmit(){
    this.loginData.setEmail(this.loginForm.value.email);
    this.loginData.setPassword(this.loginForm.value.password);

    // a and a then decide where to navigate.

    console.log(JSON.stringify(window.btoa('vivek' + ':' + 'vivek')));

    const headers = new HttpHeaders().append('Authorization', 'Basic dml2ZWs6dml2ZWs=');

    let getCall = this.http.get('http://localhost:8080/api/v1/user/get/email/'+this.loginData.getEmail(),
                    { observe: 'response', responseType: 'json', headers: headers});

    getCall.subscribe(
      (response) => {

          if(response.status === 200){
            console.log("in if part navigating to home");

            this.user = new User(response.body['id'], response.body['username'], response.body['email'],
                          response.body['password'], response.body['roles'],true);

            this.authService.setUser(this.user);
            this.router.navigate(['home']);
          }else{
            console.log("in else part navigating to /");
            this.router.navigate(['']);
          }
      },
      (error) => {
        console.log("in else part navigating to /");
        console.log(error);
        this.loginForm.reset();
      }
    );
  }
}
