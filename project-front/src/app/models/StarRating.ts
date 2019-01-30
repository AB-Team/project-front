import { OnInit } from '@angular/core';

export class StarRating implements OnInit{

  ngOnInit(){}

  constructor(count : number, average : number, min : number, max : number){

    this.count = count;
    this.average = average;
    this.min = min;
    this.max = max;
  }

  private count : number;
  private average : number;
  private min : number;
  private max : number;

  getCount(){
    return this.count;
  }

  getAverage(){
    return this.average;
  }

  getMin(){
    return this.min;
  }

  getMax(){
    return this.max;
  }

}
