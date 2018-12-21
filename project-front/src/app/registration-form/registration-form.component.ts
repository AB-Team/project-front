import { Component, OnInit } from '@angular/core';
import { Registration } from './registration';

@Component({
  selector: 'registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  form_model = new Registration("", "");

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.form_model);
  }

}
