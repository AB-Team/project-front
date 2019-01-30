import { OnInit } from '@angular/core';

export class Statistics implements OnInit{

  ngOnInit(){}

  constructor(views : number){

    this.views = views;
  }

  private views : number;

  getViews(){
    return this.views;
  }

}
