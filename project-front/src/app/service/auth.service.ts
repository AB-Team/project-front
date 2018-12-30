import { OnInit, Injectable } from "@angular/core";
import { User } from '../models/User';

@Injectable()
export class AuthService implements OnInit{

  private user: User;

  constructor(){}

  ngOnInit(){}

  setUser(user: User){
    this.user = user;
  }

  getUser(){
    return this.user;
  }

}
