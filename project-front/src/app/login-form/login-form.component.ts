import { Component, OnInit } from '@angular/core';
import { Login } from './login';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  form_model = new Login("", "");

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.form_model);
  }

  constructor() { }

  ngOnInit() {
  }

}
