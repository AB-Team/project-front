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
      'emailId': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required])
    });
  }

  ngOnInit() {
  }

  onSubmit(){
    this.registerData.setEmailId(this.registrationForm.value.emailId);
    this.registerData.setPassword(this.registrationForm.value.password);

    this.registrationForm.reset();
  }

}
