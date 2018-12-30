export class UserFormInput{

  private emailId: string;
  private password: string;

  constructor(){}

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

}
