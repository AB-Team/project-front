import { OnInit } from '@angular/core';
import { Role } from './role';

export class User implements OnInit{

  private id: number;
  private username: string;
  private email: string;
  private password: string;
  private roles: Role[];
  private isAuthenticated: boolean;

  constructor(id: number , username: string, email: string, password: string, roles: Role[], isAuthenticated: boolean){
    this.id = id;
    this.username = username;
    this.email = email;
    this.password = password;
    this.roles = roles;
    this.isAuthenticated = isAuthenticated;
  }

  ngOnInit(){}

  setId(id: number){
    this.id = id;
  }

  getId(){
    return this.id;
  }

  setRoles(roles: Role[]){
    this.roles = roles;
  }

  getRole(){
    return this.roles;
  }

  setEmailId(email: string){
    this.email = email;
  }

  setPassword(password: string){
    this.password = password;
  }

  getEmailId(){
    return this.email;
  }

  getPassword(){
    return this.password;
  }

  setUsername(username: string){
    this.username = username;
  }

  setIsAuthenticated(isAuthenticated: boolean){
    this.isAuthenticated = isAuthenticated;
  }

  getUsername(){
    return this.username;
  }

  getIsAuthenticated(){
    return this.isAuthenticated;
  }

}
