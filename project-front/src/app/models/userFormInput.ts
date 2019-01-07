export class UserFormInput{

  private email: string;
  private password: string;

  constructor(){}

  setEmail(email: string){
    this.email = email;
  }

  setPassword(password: string){
    this.password = password;
  }

  getEmail(){
    return this.email;
  }

  getPassword(){
    return this.password;
  }

}
