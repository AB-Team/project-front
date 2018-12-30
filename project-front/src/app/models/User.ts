import { OnInit } from '@angular/core';

export class User implements OnInit{

  private name: string;
  private emailId: string;
  private password: string;
  private isAuthenticated: boolean;

  constructor(name: string, emailId: string, password: string, isAuthenticated: boolean){
    this.name = name;
    this.emailId = emailId;
    this.password = password;
    this.isAuthenticated = isAuthenticated;
  }

  ngOnInit(){}

  setEmailId(emailId: string){
    this.emailId = emailId;
  }

  setPassword(password: string){
    this.password = password;
  }

  getEmailId(){
    return this.emailId;
  }

  getPassword(){
    return this.password;
  }

  setName(name: string){
    this.name = name;
  }

  setIsAuthenticated(isAuthenticated: boolean){
    this.isAuthenticated = isAuthenticated;
  }

  getName(){
    return this.name;
  }

  getIsAuthenticated(){
    return this.isAuthenticated;
  }

}
