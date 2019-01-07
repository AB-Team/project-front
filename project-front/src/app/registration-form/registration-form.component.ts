import { Component, OnInit } from '@angular/core';
import { UserFormInput } from '../models/userFormInput';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  registerData = new UserFormInput();

  registrationForm: FormGroup;

  constructor() {
    this.registrationForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required])
    });
  }

  ngOnInit() {
  }

  onSubmit(){
    this.registerData.setEmail(this.registrationForm.value.email);
    this.registerData.setPassword(this.registrationForm.value.password);

    this.registrationForm.reset();
  }

}
